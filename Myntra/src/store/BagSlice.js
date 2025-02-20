import { createSlice} from '@reduxjs/toolkit'




const BagSlice =createSlice({
    name:'Bag',
    initialState:[],
    reducers:{
        addToBag:(state,action)=>{
            console.log("item recevied",action.payload)
            state.push(action.payload);
            
        },
        RemoveBag:(state,action)=>{
            return state.filter(itemId => itemId !== action.payload);

        }

    }

});

export const BagActions=BagSlice.actions;

export default BagSlice;
