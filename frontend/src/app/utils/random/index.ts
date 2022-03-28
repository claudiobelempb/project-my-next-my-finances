const randomString = (tamanho: number) => {
  let stringAleatoria = '';
  let caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return stringAleatoria.toLocaleLowerCase();
};

const randomNumber = (min: number, max: number, multiple: number) => {
  return Math.round((Math.random() * (max - min)) / multiple) * multiple + min;
};

export { randomString, randomNumber };
