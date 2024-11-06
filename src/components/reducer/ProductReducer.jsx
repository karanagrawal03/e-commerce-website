const productReducer=(state,action)=>{
//    if(action.type==="SET_LOADING"){
//     return{
//         ...state,
//         isLoading:true
//     }
//    }
//    if(action.type==="API_ERROR"){
//     return{
//         ...state,
//         isError:true
//     }
//    }
switch(action.type){
    case "SET_LOADING":
    return{
            ...state,
            isLoading:true
            };
    case "SET_API_DATA":
        //using .filter() because that will give us the whole data while .map() gives us the data of that particular attribute
            const featureData=action.payload.filter((curElem)=>{
                return curElem.featured===true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData,
            }
    case "API_ERROR":
        return{
            ...state,
            isError:true
        }
        case "SET_SINGLE_LOADING":
            return{
                    ...state,
                    isSingleLoading:true
                    };
        case "SET_SINGLE_ERROR":
        return{
                ...state,
                isError:true,
                isSingleLoading:false
                };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct:action.payload,
            }
            default:
                return state;
        }
}

export default productReducer;