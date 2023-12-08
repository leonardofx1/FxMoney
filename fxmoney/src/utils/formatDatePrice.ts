

export const formatCurrency = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
  price
)

export const formatDate = (date: string) => {
  const dateNumber = Date.parse(date)
  return new Intl.DateTimeFormat('pt-BR').format(dateNumber);
}
