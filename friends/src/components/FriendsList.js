import React, {useEffect} from "react";
import axiosWithAuth from "../helpers/axioxWithAuth";

import Friend from "./Friend";

const axios = axiosWithAuth();

const FriendsList = props => {
    useEffect(()=>{
        axios.get("http://localhost:5000/api/friends").then(({data})=>{
            props.setFriends(data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return (
        <main className="friends-list">
            friends list
            {props.friends && props.friends.map(friend=>{
                return (
                    <Friend  key={friend.id} friend={friend}/>
                )
            })}
        </main>
    )
}

export default FriendsList;