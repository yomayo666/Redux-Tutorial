import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../typs/recipe.types";

const initialState:IRecipe[] = [];

export const favoritSlice = createSlice({
  name: 'favorits',
  initialState,
  reducers: {
    toggleFavorits: (state, {payload: recipe}: PayloadAction<IRecipe>) => {
      const isExist = state.some(r => r.id === recipe.id);
      if (isExist) {
        const index = state.findIndex(item => item.id === recipe.id)
        if(index !== -1){
            state.splice(index, 1)
        }
      } else {
        state.push(recipe);
      }
    }
  }
});

export const { actions, reducer } = favoritSlice;
