import { getFirebase, reactReduxFirebase , firebaseReducer } from "react-redux-firebase";
import { createStore , compose , applyMiddleware, combineReducers } from "redux";
import { getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from '../firebase/config'
import expenseReducer from "../reducers/expenseReducer";

const allReducers = combineReducers({
    expenseState : expenseReducer,
    firebaseState : firebaseReducer
})

export const store = createStore(allReducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
)); 
//the store takes the reducer as arguments

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)