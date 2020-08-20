import React, {useEffect, useState} from "react";
import axiosWithAuth from "../helpers/axioxWithAuth";

import Friend from "./Friend";
import FriendForm from "./FriendForm";

const axios = axiosWithAuth();

const FriendsList = props => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    })

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/friends", formData).then(({data})=> {
            props.setFriends(data);
            setFormData({
                name: "",
                age: "",
                email: ""
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    const deleteFriend = id => {
        axios.delete(`http://localhost:5000/api/friends/${id}`).then(({data})=>{
            props.setFriends(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    const updateFriend = (id, data)=> {
        axios.put(`http://localhost:5000/api/friends/${id}`, data).then(({data})=>{
            console.log(data)
            props.setFriends(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:5000/api/friends").then(({data})=>{
            props.setFriends(data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return (
        <main className="friends-list">
            <h1>Friends List</h1>
            <FriendForm formData={formData} onChange={onChange} onSubmit={onSubmit}/>
            {props.friends && props.friends.map(friend=>{
                return (
                    <Friend  updateFriend={updateFriend} deleteFriend={deleteFriend} key={friend.id} friend={friend}/>
                )
            })}
        </main>
    )
}

export default FriendsList;