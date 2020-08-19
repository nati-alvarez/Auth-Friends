import React from "react";

const Friend = ({friend}) => {
    return (
        <div className="friend">
            <div>
                <p>
                    <strong>{friend.name}</strong> {friend.age}
                </p>
            </div>
            <address>{friend.email}</address>
        </div>
    )
}

export default Friend;