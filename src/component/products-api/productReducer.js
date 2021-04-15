import {FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE, fetchProductsFailure} from "./prodcutAction";

const initialState ={
    items:[],
    loading:false,
    error:null
};

export default function productReducer(
    state=initialState,
    action 
)
{
    switch(action.type){
        case FETCH_PRODUCTS_BEGIN:
            return {...state,loading:true,error:null};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state,loading:false,items:action.payload.products}
        case fetchProductsFailure:
            return {...state,loading:false,items:[],error:action.payload.error}
        default:
            return state;
    }
}