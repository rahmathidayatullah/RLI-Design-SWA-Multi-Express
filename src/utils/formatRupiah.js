export const formatRupiah = (number) => {
  if (isNaN(parseInt(number))) return '';
  let rupiah = new Intl.NumberFormat('id-ID', { currency: 'IDR' }).format(number);
  return `Rp. ${rupiah}`
}
