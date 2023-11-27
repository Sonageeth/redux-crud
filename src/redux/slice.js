import { createSlice } from "@reduxjs/toolkit";


export const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        AddEmployee: (state, action) => {
            state.push(action.payload)
        },
        DeleteEmployee: (state,action)=> {
            return state.filter((item) => item.id !== action.payload)
          },
          updateEmployee: (state, action) => {
            const{id,names, address,number} = action.payload
            const updatedValue = state.find(item => item.id == id)
            if (updatedValue) {
                updatedValue.names = names
                updatedValue.address = address
                updatedValue.number = number
                
            }
        }
    }
})

export const { AddEmployee,DeleteEmployee,updateEmployee} = employeeSlice.actions;
export default employeeSlice.reducer