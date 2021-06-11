import { createStore } from "redux";
import expenseReducer from "../reducers/expenseReducer";

export const store = createStore(expenseReducer)