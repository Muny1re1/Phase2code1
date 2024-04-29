import React, { useState } from "react";

function Form({ onSubmit }) {
    const [formContent, setFormContents] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormContents({ ...formContent, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formContent);
        setFormContents({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };
    console.log(formContent);

    return (
        <form className="form" onSubmit={handleSubmit}>
           <strong>Date:</strong> <input
                type="date"
                name="date"
                value={formContent.date}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                value={formContent.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="category"
                value={formContent.category}
                onChange={handleChange}
                placeholder="Category"
            />
            <input
                type="text"
                name="amount"
                value={formContent.amount}
                onChange={handleChange}
                placeholder="Amount"
            /><br/>
            <button className="button" type="submit">Add Transaction</button>
        </form>
    );
}

export default Form;