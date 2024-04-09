const formatDate = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();

    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const day = String(d.getDate()).padStart(2, '0');

    return `${day} de ${monthNames[d.getMonth()]} de ${year}`;
}

export default formatDate;
