import { useState } from "react";
import "../css/home.css";

export default function ExpenseList(props) {

// console.log(props.myexpense[0].dateData.getMonth());
// console.log(props.myexpense[0].dateData.getFullYear());
// console.log(props.myexpense[0].dateData.getDate());

const [select, setSelect] = useState("2023");


let filterData = props.myexpense.filter((myexpense)=>{
        return myexpense.dateData.getFullYear().toString() === select;
})

    return (
        <div>
            <div className="expense_data_overview">
                <div className="expense_data_div">
                    <div className="expense_data_filter">
                        <div>
                            <h5 className="filter_div_name">Filter By Year</h5>
                        </div>
                        <div>
                            <select onChange={(event)=>{
                                setSelect(event.target.value);
                                // console.log(typeof(event.target.value));
                            }}>
                                <option selected>2023</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                            </select>
                        </div>
                    </div>

                    {/* {props.myexpense.map((expense)=> */}
                    {filterData.length !== 0 ?( filterData.map((expense)=>
                              <div className="expense_list">
                              <div className="expense_date">
                                  <h4>{expense.dateData.toLocaleString("en-US", {month:"long"})}</h4>
                                  <h5>{expense.dateData.getFullYear()}</h5>
                                  <h3>{expense.dateData.toLocaleString("en-US", {day: "2-digit"})}</h3>
                              </div>
                              <div className="expense_title">
                                  <h5>{expense.titleData}</h5>
                              </div>
                              <div>
                                  <button className="expense_amt" disabled>Rs.{expense.amountData}</button>
                              </div>
                          </div>
                    )  ): 
                    <div>
                        <h1 className="no_data">No expenses found ?</h1>
                    </div>
                    }




                  
                </div>


            </div>


        </div>
    )
}