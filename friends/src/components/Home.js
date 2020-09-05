import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import LoginForm from "./LoginForm";

const Home = () => {
    const history = useHistory();
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
            localStorage.setItem("token", token);
            history.push("/friends");
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