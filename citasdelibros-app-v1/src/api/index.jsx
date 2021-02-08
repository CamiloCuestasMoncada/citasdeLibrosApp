

export const apiGet = (url) => () => fetch(url).then(v => v.json());  //obtengo dartos del servidor

export const apiPut = (url, id, obj) => () => 
    fetch(`${url}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({'Content-type': 'application/json'})
    }).then(v => v.json())
