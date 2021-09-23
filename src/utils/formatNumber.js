//function buat biar ada currency titik ex:9,000

export default (number) => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
}