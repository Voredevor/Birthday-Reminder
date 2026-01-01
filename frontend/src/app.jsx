import React from "react";
import BirthdayForm from "./components/BirthdayForm.jsx";
import "./app.css"

function App() {
    return (
        <div className="app-container">
            <div className="form-card">
                <BirthdayForm />    
            </div>
        </div>
    );
}

export default App;