

export const formatCurrency = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
  price
)
 
type dateType =  string 
export const formatDate = (date:Date) => {


  return new Intl.DateTimeFormat('pt-BR').format(date);
}
