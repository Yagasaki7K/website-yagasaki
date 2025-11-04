function getHourTaquaralMondayFirstHard() {
	const now = new Date();

	// Dias da semana em JS: 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
	const day = now.getDay();
	const hour = now.getHours();
	const minutes = now.getMinutes();

	if (day === 0 || day === 1 || day === 3 || day === 5 || day === 7) {
		return false;
	}

	// Converte hora e minutos em minutos totais do dia
	const totalMinutes = hour * 60 + minutes;
	const startMinutes = 14 * 60 + 30; // 14:30
	const endMinutes = 17 * 60 + 30; // 17:30

	// Verifica se está no intervalo
	return totalMinutes >= startMinutes && totalMinutes <= endMinutes;
}

export default getHourTaquaralMondayFirstHard;
