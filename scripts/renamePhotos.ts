import fs from "node:fs/promises";
import path from "node:path";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");
const VALID_EXTENSIONS = [".png", ".jpeg", ".jpg"];

interface PhotoFile {
    name: string;
    fullPath: string;
    createdAt: number;
}

async function removeZoneIdentifiers(): Promise<number> {
    const entries = await fs.readdir(PHOTOS_DIR);
    let removed = 0;

    for (const entry of entries) {
        if (!entry.endsWith(":Zone.Identifier")) {
            continue;
        }

        const fullPath = path.join(PHOTOS_DIR, entry);

        try {
            await fs.unlink(fullPath);
            console.log(`   🧹 Removido: ${entry}`);
            removed++;
        } catch (err) {
            console.warn(`   ⚠️  Não foi possível remover ${entry}:`, err);
        }
    }

    return removed;
}

async function getPhotos(): Promise<PhotoFile[]> {
    const entries = await fs.readdir(PHOTOS_DIR);

    const photos: PhotoFile[] = [];

    for (const entry of entries) {
        if (entry.endsWith(":Zone.Identifier")) {
            continue;
        }

        const ext = path.extname(entry).toLowerCase();

        if (!VALID_EXTENSIONS.includes(ext)) {
            continue;
        }

        const fullPath = path.join(PHOTOS_DIR, entry);
        const stat = await fs.stat(fullPath);

        const createdAt =
            stat.birthtimeMs > 0 && stat.birthtimeMs !== stat.mtimeMs
                ? stat.birthtimeMs
                : stat.mtimeMs;

        photos.push({
            name: entry,
            fullPath,
            createdAt,
        });
    }

    return photos;
}

function isNumericName(name: string): boolean {
    const base = path.basename(name, path.extname(name));
    return /^\d+$/.test(base);
}

function getNumericValue(name: string): number {
    const base = path.basename(name, path.extname(name));
    return Number.parseInt(base, 10);
}

async function main() {
    console.log("🔍 Analisando fotos...");

    const removed = await removeZoneIdentifiers();

    if (removed > 0) {
        console.log(`🧹 ${removed} arquivo(s) Zone.Identifier removido(s).\n`);
    }

    const photos = await getPhotos();

    if (photos.length === 0) {
        console.log("⚠️  Nenhuma foto encontrada.");
        return;
    }

    const numericPhotos = photos.filter((p) => isNumericName(p.name));
    const nonNumericPhotos = photos.filter((p) => !isNumericName(p.name));

    if (nonNumericPhotos.length === 0) {
        console.log("✅ Nenhuma foto para renomear.");
        return;
    }

    const maxNumeric = numericPhotos.reduce((max, p) => {
        const value = getNumericValue(p.name);
        return value > max ? value : max;
    }, 0);

    nonNumericPhotos.sort((a, b) => a.createdAt - b.createdAt);

    console.log(`📸 ${nonNumericPhotos.length} foto(s) para renomear.`);
    console.log(`🔢 Último número existente: ${maxNumeric}`);

    let nextNumber = maxNumeric + 1;

    for (const photo of nonNumericPhotos) {
        const ext = path.extname(photo.name).toLowerCase();
        const newName = `${nextNumber}${ext}`;
        const newPath = path.join(PHOTOS_DIR, newName);

        if (photo.fullPath === newPath) {
            continue;
        }

        await fs.rename(photo.fullPath, newPath);

        const date = new Date(photo.createdAt).toLocaleString("pt-BR");

        console.log(`   ✅ ${photo.name} → ${newName} (${date})`);

        nextNumber++;
    }

    console.log(`\n✅ Renomeação concluída. Próximo número: ${nextNumber}`);
}

main().catch((err) => {
    console.error("💥 Erro:", err);
    process.exit(1);
});