#!/usr/bin/env bun

/**
 * Shai-Hulud 2.0 Supply Chain Attack Detector
 *
 * Checks your project dependencies against known compromised packages from the
 * Shai-Hulud 2.0 supply chain attack that targeted npm packages.
 *
 * This script checks:
 * - package.json dependencies
 * - package-lock.json (npm)
 * - pnpm-lock.yaml (pnpm)
 * - yarn.lock (yarn)
 *
 * References:
 * - https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack
 * - https://socket.dev/blog/supply-chain-attack-shai-hulud-2-0
 *
 * Usage:
 *   ./check-deps.ts
 *   (Automatically finds package.json in current or parent directories)
 */

import { readFileSync, existsSync } from "fs";
import { join } from "path";

type PackageEntry = {
	name: string;
	version: string;
};

type PackageJson = {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	optionalDependencies?: Record<string, string>;
};

type LockfilePackages = Record<string, { version?: string }>;

// Full list of compromised packages from Shai-Hulud 2.0 supply chain attack
const COMPROMISED_PACKAGES: Array<PackageEntry> = [
	{ name: "@accordproject/concerto-analysis", version: "3.24.1" },
	{ name: "@accordproject/concerto-metamodel", version: "3.12.5" },
	{ name: "@accordproject/concerto-types", version: "3.24.1" },
	{ name: "@accordproject/markdown-it-cicero", version: "0.16.26" },
	{ name: "@asyncapi/studio", version: "1.0.3" },
	{ name: "@asyncapi/studio", version: "1.0.2" },
	{ name: "@ensdomains/address-encoder", version: "1.1.5" },
	{ name: "@ensdomains/content-hash", version: "3.0.1" },
	{ name: "@ensdomains/dnsprovejs", version: "0.5.3" },
	{ name: "@ensdomains/ens-validation", version: "0.1.1" },
	{ name: "@ensdomains/ensjs", version: "4.0.3" },
	{ name: "@ensdomains/eth-ens-namehash", version: "2.0.16" },
	{ name: "@posthog/agent", version: "1.24.1" },
	{ name: "@posthog/ai", version: "7.1.2" },
	{ name: "@posthog/cli", version: "0.5.15" },
	{ name: "@posthog/clickhouse", version: "1.7.1" },
	{ name: "@posthog/core", version: "1.5.6" },
	{ name: "@posthog/hedgehog-mode", version: "0.0.42" },
	{ name: "@posthog/icons", version: "0.36.1" },
	{ name: "@posthog/lemon-ui", version: "0.0.1" },
	{ name: "@posthog/nextjs-config", version: "1.5.1" },
	{ name: "@posthog/nuxt", version: "1.2.9" },
	{ name: "@posthog/piscina", version: "3.2.1" },
	{ name: "@posthog/plugin-contrib", version: "0.0.6" },
	{ name: "@posthog/react-rrweb-player", version: "1.1.4" },
	{ name: "@posthog/rrdom", version: "0.0.31" },
	{ name: "@posthog/rrweb", version: "0.0.31" },
	{ name: "@posthog/rrweb-player", version: "0.0.31" },
	{ name: "@posthog/rrweb-record", version: "0.0.31" },
	{ name: "@posthog/rrweb-replay", version: "0.0.19" },
	{ name: "@posthog/rrweb-snapshot", version: "0.0.31" },
	{ name: "@posthog/rrweb-utils", version: "0.0.31" },
	{ name: "@posthog/siphash", version: "1.1.2" },
	{ name: "@posthog/wizard", version: "1.18.1" },
	{ name: "@postman/aether-icons", version: "2.23.3" },
	{ name: "@postman/aether-icons", version: "2.23.4" },
	{ name: "@postman/aether-icons", version: "2.23.2" },
	{ name: "@postman/csv-parse", version: "4.0.5" },
	{ name: "@postman/csv-parse", version: "4.0.3" },
	{ name: "@postman/csv-parse", version: "4.0.4" },
	{ name: "@postman/node-keytar", version: "7.9.5" },
	{ name: "@postman/node-keytar", version: "7.9.6" },
	{ name: "@postman/node-keytar", version: "7.9.4" },
	{ name: "@postman/tunnel-agent", version: "0.6.7" },
	{ name: "@postman/tunnel-agent", version: "0.6.6" },
	{ name: "@postman/tunnel-agent", version: "0.6.5" },
	{ name: "@voiceflow/common", version: "8.9.2" },
	{ name: "@voiceflow/common", version: "8.9.1" },
	{ name: "@zapier/ai-actions", version: "0.1.19" },
	{ name: "@zapier/ai-actions", version: "0.1.20" },
	{ name: "@zapier/ai-actions", version: "0.1.18" },
	{ name: "@zapier/babel-preset-zapier", version: "6.4.2" },
	{ name: "@zapier/babel-preset-zapier", version: "6.4.3" },
	{ name: "@zapier/babel-preset-zapier", version: "6.4.1" },
	{ name: "@zapier/browserslist-config-zapier", version: "1.0.4" },
	{ name: "@zapier/browserslist-config-zapier", version: "1.0.5" },
	{ name: "@zapier/browserslist-config-zapier", version: "1.0.3" },
	{ name: "@zapier/secret-scrubber", version: "1.1.5" },
	{ name: "@zapier/secret-scrubber", version: "1.1.3" },
	{ name: "@zapier/secret-scrubber", version: "1.1.4" },
	{ name: "blob-to-base64", version: "1.0.3" },
	{ name: "cpu-instructions", version: "0.0.14" },
	{ name: "crypto-addr-codec", version: "0.1.9" },
	{ name: "enforce-branch-name", version: "1.1.3" },
	{ name: "ethereum-ens", version: "0.8.1" },
	{ name: "formik-error-focus", version: "2.0.1" },
	{ name: "fuzzy-finder", version: "1.0.5" },
	{ name: "fuzzy-finder", version: "1.0.6" },
	{ name: "gatsby-plugin-cname", version: "1.0.1" },
	{ name: "gatsby-plugin-cname", version: "1.0.2" },
	{ name: "get-them-args", version: "1.3.3" },
	{ name: "kill-port", version: "2.0.2" },
	{ name: "posthog-docusaurus", version: "2.0.6" },
	{ name: "posthog-js", version: "1.297.3" },
	{ name: "posthog-node", version: "5.13.3" },
	{ name: "posthog-node", version: "5.11.3" },
	{ name: "posthog-node", version: "4.18.1" },
	{ name: "posthog-react-native", version: "4.11.1" },
	{ name: "posthog-react-native", version: "4.12.5" },
	{ name: "posthog-react-native-session-replay", version: "1.2.2" },
	{ name: "react-hook-form-persist", version: "3.0.1" },
	{ name: "react-native-email", version: "2.1.2" },
	{ name: "react-native-email", version: "2.1.1" },
	{ name: "react-native-google-maps-directions", version: "2.1.2" },
	{ name: "react-native-phone-call", version: "1.2.2" },
	{ name: "react-native-phone-call", version: "1.2.1" },
	{ name: "react-native-websocket", version: "1.0.3" },
	{ name: "shell-exec", version: "1.1.3" },
	{ name: "shell-exec", version: "1.1.4" },
	{ name: "sort-by-distance", version: "2.0.1" },
	{ name: "template-lib", version: "1.1.3" },
	{ name: "template-lib", version: "1.1.4" },
	{ name: "tenacious-fetch", version: "2.3.2" },
	{ name: "url-encode-decode", version: "1.0.1" },
	{ name: "zapier-platform-cli", version: "18.0.4" },
	{ name: "zapier-platform-cli", version: "18.0.3" },
	{ name: "zapier-platform-cli", version: "18.0.2" },
	{ name: "zapier-platform-core", version: "18.0.4" },
	{ name: "zapier-platform-core", version: "18.0.3" },
	{ name: "zapier-platform-core", version: "18.0.2" },
	{ name: "zapier-platform-schema", version: "18.0.4" },
	{ name: "zapier-platform-schema", version: "18.0.3" },
	{ name: "zapier-platform-schema", version: "18.0.2" },
];

function findPackageJson(): string | null {
	let currentDir = process.cwd();
	const root = "/";

	while (currentDir !== root) {
		const pkgPath = join(currentDir, "package.json");
		if (existsSync(pkgPath)) {
			return pkgPath;
		}
		const parentDir = currentDir.split("/").slice(0, -1).join("/");
		if (!parentDir || parentDir === currentDir) break;
		currentDir = parentDir || root;
	}

	const rootPkgPath = join(root, "package.json");
	if (existsSync(rootPkgPath)) {
		return rootPkgPath;
	}

	return null;
}

function loadPackageJson(): { path: string; content: PackageJson; projectDir: string } {
	const pkgPath = findPackageJson();

	if (!pkgPath) {
		console.error("❌ package.json not found in current directory or any parent directory.");
		process.exit(1);
	}

	try {
		const content = JSON.parse(readFileSync(pkgPath, "utf-8")) as PackageJson;
		const projectDir = pkgPath.substring(0, pkgPath.lastIndexOf("/"));
		return { path: pkgPath, content, projectDir };
	} catch (error) {
		console.error(`❌ Failed to parse package.json: ${error}`);
		process.exit(1);
	}
}

function extractDepsFromPackageJson(pkg: PackageJson): Array<PackageEntry> {
	const deps: Array<PackageEntry> = [];

	const sections = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"] as const;
	for (const section of sections) {
		if (pkg[section]) {
			for (const [name, version] of Object.entries(pkg[section])) {
				deps.push({ name, version });
			}
		}
	}

	return deps;
}

function parseNpmLockfile(projectDir: string): Array<PackageEntry> {
	const lockfilePath = join(projectDir, "package-lock.json");
	if (!existsSync(lockfilePath)) return [];

	try {
		const lockfile = JSON.parse(readFileSync(lockfilePath, "utf-8"));
		const deps: Array<PackageEntry> = [];

		// package-lock.json v2/v3 format
		if (lockfile.packages) {
			for (const [pkgPath, info] of Object.entries<any>(lockfile.packages)) {
				if (pkgPath === "") continue; // root package
				const name = pkgPath.startsWith("node_modules/") ? pkgPath.replace("node_modules/", "") : pkgPath;
				if (info.version) {
					deps.push({ name, version: info.version });
				}
			}
		}

		// package-lock.json v1 format fallback
		if (lockfile.dependencies && deps.length === 0) {
			for (const [name, info] of Object.entries<any>(lockfile.dependencies)) {
				if (info.version) {
					deps.push({ name, version: info.version });
				}
			}
		}

		return deps;
	} catch (error) {
		console.warn(`⚠️  Failed to parse package-lock.json: ${error}`);
		return [];
	}
}

function parsePnpmLockfile(projectDir: string): Array<PackageEntry> {
	const lockfilePath = join(projectDir, "pnpm-lock.yaml");
	if (!existsSync(lockfilePath)) return [];

	try {
		const content = readFileSync(lockfilePath, "utf-8");
		const deps: Array<PackageEntry> = [];

		// Simple regex parsing for pnpm lock format
		// Format: /@scope/package@version or /package@version
		const packageRegex = /^\s+['"]?([^'":\s]+)['"]?:\s+(['"])?([^'"\s]+)\2/gm;
		let match;

		while ((match = packageRegex.exec(content)) !== null) {
			const fullName = match[1];
			const versionInfo = match[3];

			// Extract package name and version
			// Handle scoped packages: @scope/package@version
			// Handle regular packages: package@version
			const lastAtIndex = fullName.lastIndexOf("@");
			if (lastAtIndex > 0) {
				const name = fullName.substring(0, lastAtIndex);
				const version = fullName.substring(lastAtIndex + 1);
				if (version && !version.startsWith("link:") && !version.startsWith("file:")) {
					// Clean version from any additional info
					const cleanVersion = version.split("(")[0].trim();
					deps.push({ name, version: cleanVersion });
				}
			}
		}

		return deps;
	} catch (error) {
		console.warn(`⚠️  Failed to parse pnpm-lock.yaml: ${error}`);
		return [];
	}
}

function parseYarnLockfile(projectDir: string): Array<PackageEntry> {
	const lockfilePath = join(projectDir, "yarn.lock");
	if (!existsSync(lockfilePath)) return [];

	try {
		const content = readFileSync(lockfilePath, "utf-8");
		const deps: Array<PackageEntry> = [];

		// Yarn lock format parsing
		// Format: "package@version", package@version:
		const lines = content.split("\n");
		let currentPackage = "";

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			// Package declaration line (not indented or starts with quote)
			if (line && !line.startsWith(" ") && !line.startsWith("\t")) {
				// Extract package name from declaration like: "package@^1.0.0", "@scope/package@^1.0.0":
				const packageMatch = line.match(/^["']?(@?[^@"']+)@/);
				if (packageMatch) {
					currentPackage = packageMatch[1];
				}
			}

			// Version line (indented with "version")
			if (line.trim().startsWith("version ") && currentPackage) {
				const versionMatch = line.match(/version\s+["']([^"']+)["']/);
				if (versionMatch) {
					deps.push({ name: currentPackage, version: versionMatch[1] });
					currentPackage = "";
				}
			}
		}

		return deps;
	} catch (error) {
		console.warn(`⚠️  Failed to parse yarn.lock: ${error}`);
		return [];
	}
}

function detectPackageManager(projectDir: string): string {
	if (existsSync(join(projectDir, "pnpm-lock.yaml"))) return "pnpm";
	if (existsSync(join(projectDir, "yarn.lock"))) return "yarn";
	if (existsSync(join(projectDir, "package-lock.json"))) return "npm";
	return "unknown";
}

function main() {
	const { path: pkgPath, content: pkg, projectDir } = loadPackageJson();

	console.log(`📦 Checking: ${pkgPath}`);

	const packageManager = detectPackageManager(projectDir);
	console.log(`📋 Package manager: ${packageManager}`);

	// Collect dependencies from all sources
	const allDeps = new Map<string, Set<string>>();

	// Add package.json dependencies
	const packageJsonDeps = extractDepsFromPackageJson(pkg);
	for (const dep of packageJsonDeps) {
		if (!allDeps.has(dep.name)) {
			allDeps.set(dep.name, new Set());
		}
		allDeps.get(dep.name)!.add(dep.version);
	}

	// Add lockfile dependencies
	let lockfileDeps: Array<PackageEntry> = [];
	switch (packageManager) {
		case "npm":
			lockfileDeps = parseNpmLockfile(projectDir);
			break;
		case "pnpm":
			lockfileDeps = parsePnpmLockfile(projectDir);
			break;
		case "yarn":
			lockfileDeps = parseYarnLockfile(projectDir);
			break;
	}

	if (lockfileDeps.length > 0) {
		console.log(`🔒 Found ${lockfileDeps.length} packages in lockfile`);
		for (const dep of lockfileDeps) {
			if (!allDeps.has(dep.name)) {
				allDeps.set(dep.name, new Set());
			}
			allDeps.get(dep.name)!.add(dep.version);
		}
	}

	// Check for compromised packages
	const compromised: Array<{ name: string; version: string; source: string }> = [];

	for (const [name, versions] of allDeps.entries()) {
		for (const version of versions) {
			const isCompromised = COMPROMISED_PACKAGES.some((bad) => bad.name === name && bad.version === version);
			if (isCompromised) {
				const source = packageJsonDeps.some((d) => d.name === name && d.version === version) ? "package.json" : "lockfile";
				compromised.push({ name, version, source });
			}
		}
	}

	if (compromised.length === 0) {
		console.log("✅ No compromised packages found.");
		return;
	}

	console.log("\n🚨 COMPROMISED PACKAGES DETECTED!");
	console.log("━".repeat(60));
	for (const c of compromised) {
		console.log(`❌ ${c.name}@${c.version} (found in: ${c.source})`);
	}

	console.log("\n🔧 Recommended actions:");
	console.log("1. Remove node_modules directory");
	console.log("2. Clear package manager cache:");
	console.log("   - npm: npm cache clean --force");
	console.log("   - pnpm: pnpm store prune");
	console.log("   - yarn: yarn cache clean");
	console.log("3. Pin packages to safe versions in package.json (use exact versions)");
	console.log("4. Delete lockfile and regenerate it");
	console.log("5. Reinstall dependencies");
	console.log("6. Rotate all secrets/tokens (GitHub, CI/CD, cloud providers)");
	console.log('7. Audit GitHub org for suspicious repos named "Shai-Hulud" or "SHA1-HULUD"');
	console.log("\n📚 More info: https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack");

	process.exit(1);
}

main();
