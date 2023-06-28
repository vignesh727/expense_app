
import "../css/home.css";
import { useState } from "react";
import ExpenseList from "./expense_list";

export default function Home() {


    let day = new Date();


    let expenseData = [
        {
            dateData: day,
            titleData: "Car Insuranse",
            amountData: 2000
        },
        {
            dateData: day,
            titleData: "Bike Insuranse",
            amountData: 4999
        }
    ]

    const [mapData, setMapData] = useState(expenseData);


    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState("");

    const [date, setDate] = useState("");


    const [btn, setBtn] = useState(false);

    const handleNewExpense = ()=>{
            setBtn(true);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(title == "" || amount == "" || date == ""){
            alert("Add full Details");
        }
        else{
            
        let result = {
            titleData: title,
            amountData: amount,
            dateData: new Date(date)
        }
        console.log(result);


        setMapData((previousData) => {
            return [result, ...previousData];
        });

        setTitle("");
        setDate("");
        setAmount("");
        }

    }


    const closeBtn = ()=>{
        setBtn(false);
    }



    console.log(date);
    // console.group()

    return (
        <div>
            {/* <Link to={"/career"}><p>Click</p></Link> */}

            <div>
                <h1>Expense App</h1>
            </div>

            <div>   
                <div className="center">
                    <div className="expense_details_overdiv">
                    {btn == true ?
                <form onSubmit={handleSubmit}>
                    <div >
                        <div className="d_flex">
                            <div>
                                <div className="expense_details_label">
                                    <label>Title</label>
                                </div>
                                <div className="expense_details_input">
                                    <input type="text" onChange={(event) => {
                                        setTitle(event.target.value);
                                    }} value={title}></input>
                                </div>
                            </div>
                            <div>
                                <div className="expense_details_label">
                                    <label>Amount</label>
                                </div>
                                <div className="expense_details_input">
                                    <input type="number" onChange={(event) => {
                                        setAmount(event.target.value);
                                    }} value={amount}></input>
                                </div>
                            </div>
                        </div>
                        <div className="expense_details_date">
                            <div className="expense_details_label">
                                <label>Date</label>
                            </div>
                            <div className="expense_details_input">
                                <input type="date" onChange={(event) => {
                                    setDate(event.target.value);
                                }} value={date}></input>
                            </div>
                        </div>
                        <div>
                            <div className="expense_details_btn">
                                <div>
                                    <button onClick={closeBtn}>Cancel</button>
                                </div>
                                <div>
                                    <button type="submit" >Add Expense</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                 :      
              <div className="add_expense_btn">
                    <button onClick={handleNewExpense}>Add New Expense</button>
                </div>
                }
                    </div>
                </div>
                

                <ExpenseList myexpense={mapData}></ExpenseList>

            </div>

        </div>
    )
}