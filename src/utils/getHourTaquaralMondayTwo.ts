function getHourTaquaralMondayTwo() {
    const now = new Date();

    // Dias da semana em JS: 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const day = now.getDay();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    if (day < 1 || day > 5) {
        return false;
    }

    // Converte hora e minutos em minutos totais do dia
    const totalMinutes = hour * 60 + minutes;
    const startMinutes = 14 * 60; // 14:00
    const endMinutes = 16 * 60; // 16:00

    // Verifica se está no intervalo
    return totalMinutes >= startMinutes && totalMinutes <= endMinutes;
}

export default getHourTaquaralMondayTwo;
