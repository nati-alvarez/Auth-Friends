import React from "react";

const FriendForm = ({formData, onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="friendForm">
            <label htmlFor="name">
                Name: <input onChange={onChange} value={formData.name} name="name" type="text" placeholder="Your friends name"/>
            </label>
            <label htmlFor="age">
                Age: <input onChange={onChange} value={formData.age} name="age" type="number" placeholder="Your friends age"/>
            </label>
            <label htmlFor="email">
                Name: <input onChange={onChange} value={formData.email} name="email" type="email" placeholder="Your friends email"/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default FriendForm;