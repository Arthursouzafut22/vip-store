export function formatPrice(price: number) {
  return price?.toLocaleString("PT-BR", { currency: "BRL", style: "currency" });
}
