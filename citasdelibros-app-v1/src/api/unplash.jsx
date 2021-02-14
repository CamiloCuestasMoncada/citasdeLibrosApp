
const clienteId = 'nrhSC4hO7OhG8VQKSaqqJsLLywH_oZ5QI9JM6a9J4P4';
const endpoint = 'https://api.unplash.com/search/photos';





export const apiUnplash = () =>  {
    fetch(`${endpoint}?query=books&client_id=${clienteId}`)
    .then(response=>{
        return response.json()
    }).then(jsonResponse => {
        console.log(jsonResponse);
    })
}
   