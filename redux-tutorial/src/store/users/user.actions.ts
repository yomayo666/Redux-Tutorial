import { createAsyncThunk } from "@reduxjs/toolkit"
import { Iuser } from "../../typs/user.types"

const fetchUserById = (userId: number):Promise<Iuser>     => {
    return new Promise(resolve => 
        setTimeout(() => resolve({ id: 1, name: 'Alex' }), 1000))
}

export const getUserById = createAsyncThunk<Iuser, number>('users/by-id', 
async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response
    } catch(error) {
        return thunkApi.rejectWithValue(error)
    }
})