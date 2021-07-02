import { getFirestore } from "redux-firestore"

export function addExpenseAction(newExpense){
    return async(dispatch,state,{getFirestore}) => {
       const db = getFirestore()
       try {
          await db.collection('Expenses').add(newExpense) 
       } 
       catch (error) {
        console.log(error)
       }
    }
}

export function getAllExpensesAction(){
    return(dispatch,state, {getFirestore}) =>{
        const db = getFirestore()
        db.collection('Expenses').onSnapshot(
            (results) =>{
                let expensesindb =[]
                results.forEach((doc) =>{
                let expense = doc.data()
                expense.id = doc.id
                expensesindb.push(expense)
                })

                dispatch({
                    type : 'GET_ALL_EXPENSES',
                    payload: expensesindb
                }) 

                
            },(error)=>{
                console.log(error)
            }
        )
    }
}

export function editExpenseAction (id, updatedExpense){
    return async(dispatch, state, {getFirestore}) =>{
        const db = getFirestore()
        try {
          await db.collection('Expenses').doc(id).update(updatedExpense)  
        } 
        catch (error) {
            console.log(error)
        }
    }
    
}

export function deleteExpenseAction(id){
    return async(dispatch, state, {getFirestore}) =>{
       const db = getFirestore()
       try {
        await db.collection('Expenses').doc(id).delete()
       } 
       catch (error) {
        console.log(error)
       }
    }
}