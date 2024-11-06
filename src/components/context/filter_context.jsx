import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './ProductContext';
import reducer from "../reducer/FilterReducer";


const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
      },
}


export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();
    const [state,dispatch]=useReducer(reducer,initialState);
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
      };
      const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
      };
       // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

// to sort the products
useEffect(() => {
  dispatch({ type: "FILTER_PRODUCTS" });
  dispatch({ type: "SORTING_PRODUCTS" });
}, [products, state.sorting_value, state.filters]);
    useEffect(()=>{
        dispatch({type:'LOAD_FILTER_PRODUCTS',payload: products})
    },[products])
    //to clear the filter
    const clearFilters = () => {
      dispatch({ type: "CLEAR_FILTERS" });
    };
    return(
    <FilterContext.Provider value={{ ...state,setGridView,setListView,sorting,updateFilterValue,clearFilters }}>
        {children}
    </FilterContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}
