import React from "react";
import Button from "./Transaction";

function Form (){
    return (
       <>
         <form className="form">
           <strong>Date:</strong><input type="date" name="Date" placeholder="mm/dd/yy"/>
           <input type="text" name="Description" placeholder="Description"/>
           <input type="text" name="Category" placeholder="Category"/>
           <input type="text" name="Amount" placeholder="Amount"/>
        </form>
        <Button/>
       </>
    )
}

export default Form;