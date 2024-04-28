import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";


function App() {
    const [payments, setPayments] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const addPayment = (formContent) => {
        setPayments([...payments, formContent]);
    };

    const filteredPayments = payments.filter((payment) =>
        payment.description.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <div className="App">
            <header>
                <h1>The Royal Bank of Flatiron</h1>
            </header>
            <SearchBar onChange={setSearchWord} />
            <Form onSubmit={addPayment} />
            <Table payments={filteredPayments} />
        </div>
    );
}

export default App;
