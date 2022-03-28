export const formatPrice = (price: number): string => {
  const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  return new Intl.NumberFormat('pt-BR', params).format(price);
};

export const formatValue = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

// export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
//   style: 'currency',
//   currency: 'BRL',
// });
