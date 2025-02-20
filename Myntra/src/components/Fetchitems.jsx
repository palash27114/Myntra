import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemsSlice';
import { fetcherActions } from '../store/fetchStatusSlice';


const Fetchitems = () => {

   const dispatch= useDispatch();
const Fetch=  useSelector(store=>store.fetchStatus)


useEffect(()=>{
    if(Fetch.fetchDone) return;
    
    const controller= new AbortController();
    const signal= controller.signal;
    dispatch(fetcherActions.markFetchingStarted());
    fetch("http://localhost:8080/items",{signal})
    .then((res)=>res.json())
    .then(({items})=>{
        dispatch(fetcherActions.markFetchDone());
        dispatch(fetcherActions.markFetchingFinished());
        dispatch( itemsActions.addInitalItems(items[0]))
       
    })

    return()=>{
        controller.abort();
    }

},[Fetch])





  return (
    <></>
  )
}

export default Fetchitems
