import AsyncStorage from '@react-native-community/async-storage';
//Foods;
const urlGetFood="https://food-fast-app.herokuapp.com/apifoods";
const urlSignUp="https://food-fast-app.herokuapp.com/apiusers";
const urlLogin="https://food-fast-app.herokuapp.com/apiusers/login";
const urlEditProfile="https://food-fast-app.herokuapp.com/apiusers/edit";
const urlGetCollections="https://food-fast-app.herokuapp.com/apicollections/foods";
const urlSendBill="https://food-fast-app.herokuapp.com/apibills";
const urlCompletedBill="https://food-fast-app.herokuapp.com/apibills";
function* getFoodsFromAPI(){
    const response=yield fetch(urlGetFood)
    .then(res=>res.json())
    .then(resJson=>{
        return resJson
    })
    .catch(err=>{
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
                return true;

            }
               
            else
                return false;
        })
        .catch(err=>{
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
        return [];
    })
    return collections;
}

//Bill
function*  sendBill(data){
        
       let result=yield fetch(urlSendBill, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: data.contact._id,
                contact:{
                    address:data.contact.address,
                    phone:data.contact.phone,
                    name:data.contact.name
                },
                arrFoods:data.dataOrder.foodOrder,
                total:data.dataOrder.totalBill,
                cardPayMethod:data.payMethod
            })
          })
          .then(res=>res.json())
          .then(resJson=>{
              if(resJson.data._id)
                return resJson.data._id;
              else
                return null
          })
          .catch(err=>{
              return null
          })

        return result;
  
}
export async function  completedBill(data){
       let result=await fetch(urlCompletedBill, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data,
            })
          })
          .then(res=>res.json())
          .then(resJson=>{
              if(resJson.kq==1)
                return true;
              else
                return false
          })
          .catch(err=>{
              return false
          })

        return result;
  
}

//history
function* getHistory(){
    try {
        const jsonValue = yield AsyncStorage.getItem('@arrHistory2')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
            return [];
      }
}

function* storageHistory(arrHistory){
    try {
        const jsonValue = JSON.stringify(arrHistory);
        yield AsyncStorage.setItem('@arrHistory2', jsonValue);
        return true;
      } catch (e) {
        return false;
      }
}


export const api={
    getFoodsFromAPI,
    getFavorite,
    storageFavorite,
    getOrder,
    storageOrder,
    editProfileFromAPI,
    getCollectionsFromAPI,
    sendBill,
    getHistory,
    storageHistory
}