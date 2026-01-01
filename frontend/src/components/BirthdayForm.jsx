import React, { useState } from "react";
import api from "../services/api.js";

const BirthdayForm = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        dateOfBirth: ""
    });

    const [ popup, setPopup ] = useState (null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPopup("");

        try {
            await api.post("/api/users", formData);

            setPopup({
                type: "success",
                text: "🎉 Birthday saved successfully! 🎊"
            })

            setFormData({ name: "", email: "", dateOfBirth: "" })
        } catch (error) {
            setPopup({
                type: "error",
                text: 
                error.response?.data?.message || "Omo E no work o"
            });
        }; 
        setTimeout(() => setPopup(null), 5000)
    }

    return (
        <div style={{ maxWidth: "400px", margin: "40px auto" }}>
            <h2 className="title"> BIRTHDAY REMINDER API </h2>

            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                    <br />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                    <br />
                <input 
                    type="date" 
                    name="dateOfBirth"
                    placeholder="Date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />

                <button type="submit"> Save Birthday </button>

            </form>

            {/* {message && <p className="message">{message}</p> } */}
            { popup && (
                <div className={ `popup ${popup.type}`}>
                    {popup.text}
                </div>
            )}
        </div>
    ); 

};

export default BirthdayForm;