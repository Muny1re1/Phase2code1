import React from "react";

function Button (){
    const button = <button className="button" onClick={submit}>Add Transaction.</button>;
    return (
        button
    )
}

function submit(){
    alert("Submitted!")
}

export default Button;