import React from "react";

const Friend = ({friend, deleteFriend}) => {
    return (
        <div className="friend">
            <div>
                <p>
                    <strong>{friend.name}</strong> {friend.age}
                </p>
            </div>
            <address>{friend.email}</address>
            <button>Edit</button>
            <button onClick={()=> deleteFriend(friend.id)}>Delete</button>
        </div>
    )
}

export default Friend;