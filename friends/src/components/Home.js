import React, {useState} from "react";

import LoginForm from "./LoginForm";

const Home = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className="home">
            <h1>Auth Friends</h1>
            <LoginForm onChange={onChange} onSubmit={onSubmit} formData={formData}/>
        </main>
    )
}

export default Home;