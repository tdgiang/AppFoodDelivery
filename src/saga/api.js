import AsyncStorage from '@react-native-community/async-storage';

//Foods;
const urlGetFood="http://192.168.0.107:3000/apifoods";
const urlSignUp="http://192.168.0.107:3000/apiusers";
const urlLogin="http://192.168.0.107:3000/apiusers/login";
const urlEditProfile="http://192.168.0.107:3000/apiusers/edit";
const urlGetCollections="http://192.168.0.107:3000/apicollections/foods";
function* getFoodsFromAPI(){
    const response=yield fetch(urlGetFood)
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
        const jsonValue = yield AsyncStorage.getItem('@arrFavorite7')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
            return [];
      }
}

function* storageFavorite(arrFavorite){
    try {
        const jsonValue = JSON.stringify(arrFavorite);
        yield AsyncStorage.setItem('@arrFavorite7', jsonValue);
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
    
    try {
        const jsonValue = JSON.stringify(arrOrder);
        yield AsyncStorage.setItem('@arrOrder6', jsonValue);
        return true;
    } catch (error) {
        return false;
    }
    

}

//User
export async function  signUpFromAPI(data){
    try {
        console.log(data);
        const  response=await fetch(urlSignUp, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: data.userName,
                passWord: data.pass,
                name:data.name,
                phone:data.phone,
                address:data.address
            })
          })
        return response.status==200?true:false;

    } catch (e) {
        return false
    }
}
export  function  loginFromAPI(data){
        return(
            fetch(urlLogin, {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: data.userName,
                    passWord: data.pass
                })
            })
            .then(res=>res.json())
          )
}
function* editProfileFromAPI(newData){
 
       fetch(urlEditProfile, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: newData.userName,
                gender:newData.gender,
                name:newData.name,
                phone:newData.phone,
                dateOfBirth:newData.dateOfBirth,
                address:newData.address
            })
          })
        .then(res=>res.json())
        .then(resJson=>{
            if(resJson.user)
            {
                console.log("Edit success API");
                return true;

            }
               
            else
                return false;
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
}

//Collection

function* getCollectionsFromAPI(){
    const collections=yield fetch(urlGetCollections)
    .then(res=>res.json())
    .then(resJson=>{
        return resJson
    })
    .catch(err=>{
        console.log(err);
        return [];
    })
    return collections;
}



export const api={
    getFoodsFromAPI,
    getFavorite,
    storageFavorite,
    getOrder,
    storageOrder,
    editProfileFromAPI,
    getCollectionsFromAPI
}