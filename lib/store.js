import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";



export const makeStore = () => {
return configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
}

export default makeStore;


