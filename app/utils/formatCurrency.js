export function formatCurrency(amount) {
    // Menggunakan fungsi toLocaleString dengan pengaturan Indonesia
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Menyatakan jumlah desimal minimal
    }).format(amount);
  }
  