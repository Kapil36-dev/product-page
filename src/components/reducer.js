export const initialState = {
    basket: [],
    product: null,
    
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount , item) => item.new_price + amount , 0);

export const reducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
        
        case 'BUY_NOW':
            return{
                ...state,
                product:action.item,
            };
        
        default:
            return state; 
    }

}


export default reducer;