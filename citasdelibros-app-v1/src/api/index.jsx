

export const apiGet = (url) => () => fetch(url).then(v => v.json());  //obtengo dartos del servidor

