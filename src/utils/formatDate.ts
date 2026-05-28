const formatDate = (date: string) => {
    const d = new Date(date);
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const day = String(d.getDate()).padStart(2, "0");

    return `${day} de ${monthNames[d.getMonth()]}`;
};

export default formatDate;
