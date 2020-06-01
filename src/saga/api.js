
const urlGet="http://192.168.0.107:3000/apifoods"
function* getFoodsFromAPI(){
    const response=yield fetch(urlGet)
    .then(res=>res.json())
    .then(resJson=>{
        console.log(resJson.data);
        return resJson
    })
    .catch(err=>{
        console.log(err);
        return [];
    })
    yield console.log(response);
    return response;
}




export const api={
    getFoodsFromAPI
}