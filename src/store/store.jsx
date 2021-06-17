import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { createStore , compose , applyMiddleware } from "redux";
import { getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from '../firebase/config'

import expenseReducer from "../reducers/expenseReducer";

export const store = createStore(expenseReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
)); 
//the store takes the reducer as arguments

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)