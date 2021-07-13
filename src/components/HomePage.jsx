import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../actions/authActions'
import AddExpense from './AddExpense'
import ExpenseList from './ExpenseList'

class HomePage extends Component {
    constructor(props){
        super(props)
    }

    handleLogOut =() =>{
        this.props.logOutAction()
    }

    render() {
        return (
            <div className = "container">
                <div className = "row navbar navbar-default" id = "topnav">
                    <h2>Expense Tracker</h2>
                </div>

                <div className = "container">
                    <div className = 'row text-right'  style ={{padding : 20}}>
                        <button type = 'button' className = "btn btn-primary btn-lg" onClick = {this.handleLogOut}>Log Out</button>
                    </div>

                    <div className = "row">
                        <div className = "col-md-3 addexpense">
                            <h4 className = "headings">Record New Expense</h4>
                            <AddExpense />
                        </div>


                     <div className = "col-md-9 text-center">
                        <h4 className = "headings">Expense List</h4>

                       
                            <div className = "col-md-12">
                                <div className = "col-xs-3 col-sm-3 col-md-3">
                                 <h4>Category</h4>
                                </div>

                                <div className = "col-xs-3 col-sm-3 col-md-3">
                                    <h4>Item/Service</h4>
                                </div>

                                <div className = "col-xs-2 col-sm-2 col-md-2"  style={{paddingLeft:30}}>
                                    <h4>Amount</h4>
                                </div>

                                <div className = "col-xs- 3 col-sm-3 col-md-3">
                                    <h4>Date</h4>
                                </div>
                             </div>

                        <ExpenseList />
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    logOutAction
}

export default connect(null, mapDispatchToProps)(HomePage)