import React, {useState} from "react";
import axios from "axios";

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
        axios.post("http://localhost:5000/api/login", formData).then(({data})=>{
            const token = data.payload;
            localStorage.setItem("token",data.payload);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <main className="home">
            <h1>Auth Friends</h1>
            <LoginForm onChange={onChange} onSubmit={onSubmit} formData={formData}/>
        </main>
    )
}

export default Home;