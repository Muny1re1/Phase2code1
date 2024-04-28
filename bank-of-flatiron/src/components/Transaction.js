import React from "react";
import Table from './Table.js';

function Button(props) {
    function submit() {
        const objects = props.updatedFormContents;
        console.log(objects);
    }

    return (
        <>
            <button className="button" onClick={submit}>Add Transaction</button>
            {props.updatedFormContents.map((object, index) => (
                <Table key={index} {...object} />
            ))}
        </>
    );
}

export default Button