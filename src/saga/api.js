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
    
    try {
        const jsonValue = yield AsyncStorage.getItem('@arrFavorite6')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
            return [];
      }
}

function* storageFavorite(arrFavorite){
    try {
        const jsonValue = JSON.stringify(arrFavorite);
        yield AsyncStorage.setItem('@arrFavorite6', jsonValue);
        return true;
      } catch (e) {
        return false;
      }
}

//Order
function* getOrder(){
    try{
        const jsonValue = yield AsyncStorage.getItem('@arrOrder6')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    }catch(e){
        return [];
    }
    
}
function* storageOrder(arrOrder){
    console.log("StorageOrder");
    
    try {
        const jsonValue = JSON.stringify(arrOrder);
        yield AsyncStorage.setItem('@arrOrder6', jsonValue);
        return true;
    } catch (error) {
        return false;
    }
    

}





export const api={
    getFoodsFromAPI,
    getFavorite,
    storageFavorite,
    getOrder,
    storageOrder
}