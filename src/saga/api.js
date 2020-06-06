import AsyncStorage from '@react-native-community/async-storage';

//Foods
const urlGet="http://192.168.0.107:3000/apifoods"
function* getFoodsFromAPI(){
    const response=yield fetch(urlGet)
    .then(res=>res.json())
    .then(resJson=>{
        return resJson
    })
    .catch(err=>{
        console.log(err);
        return [];
    })
    return response;
}



//Favorites
function* getFavorite(){
    console.log("This is func getFavorite from api");
    
    try {
        const jsonValue = yield AsyncStorage.getItem('@arrFavorite6')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
            return [];
      }
}

function* addFavorite(arrFavorites){
    yield console.log("This is func addFavorite from api");
    try {
        const jsonValue = JSON.stringify(arrFavorites);
        yield AsyncStorage.setItem('@arrFavorite6', jsonValue);
        return true;
      } catch (e) {
        return false;
      }
}






export const api={
    getFoodsFromAPI,
    getFavorite,
    addFavorite
}