import React from "react";

function Table({ payments }) {
    if(payments){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.date}</td>
                            <td>{payment.description}</td>
                            <td>{payment.category}</td>
                            <td>{payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else {
   return (
    alert("null!")
   )
}
    }

export default Table;