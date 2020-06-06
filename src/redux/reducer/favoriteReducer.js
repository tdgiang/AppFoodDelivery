
const favoriteReducer=(favorite=[],action)=>{
    switch (action.type) {
        case "GET_FAVORITE_SUCCEEDED":
                return action.arrFavorite;
        case "GET_FAVORITE_FAILED":
                return [];
        case "ADD_FAVORITE_SUCCEEDED":
                return(
                   action.arrFavorite
                );
        case "ADD_FAVORITE_FAILED":
                return(
                    favorite
                );
        case "DELETE_FAVORITE":
                return(
                    favorite.filter(e=>e._id!=action.idFood)
                )
        case "DELETE_FAVORITE_FAILED":
                return(
                    favorite
                )
        default:
            return favorite;
    }
}


export default favoriteReducer;