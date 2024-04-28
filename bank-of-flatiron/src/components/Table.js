import React from "react";

function Table(){
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
                <tr>
                    <td>01/01/2021</td>
                    <td>Rent</td>
                    <td>Rent</td>
                    <td>$1000</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;