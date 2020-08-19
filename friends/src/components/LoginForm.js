import React from "react";

const LoginForm = ({formData, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="login-form">
            <h2>Login</h2>
            <label htmlFor="username">
                Username:
                <input onChange={onChange} type="text" name="username" placeholder="username" value={formData.username}/>
            </label>
            <label htmlFor="password">
                Password:
                <input onChange={onChange} type="text" name="password" placeholder="password" value={formData.password}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default LoginForm;