import React, {useState} from "react";

const Friend = ({friend, deleteFriend, updateFriend}) => {
    const [editing, setEditing] = useState(false);
    const [edits, setEdits] = useState({
        name: friend.name,
        age: friend.age,
        email: friend.email
    })

    const onChange = e => {
        setEdits({
            ...edits,
            [e.target.name]: e.target.value
        })
    }

    const submitEdits = id => {
        updateFriend(id, edits);
        setEditing(false);
    }
    return (
        <div className="friend">
            {editing?(
                <div>
                    <input onChange={onChange} type="text" name="name" value={edits.name} placeholder="name"/>
                    <input onChange={onChange} type="number" name="age" value={edits.age} placeholder="age"/>
                    <input onChange={onChange} type="email" name="email" value={edits.email} placeholder="email"/>
                    <div>
                        <button onClick={()=> setEditing(false)}>Cancel</button>
                        <button onClick={()=> submitEdits(friend.id)}>Submit Edits</button>
                    </div>
                </div>
            ): 
                <div>
                    <p>
                        <strong>{friend.name}</strong> {friend.age}
                    </p> 
                    <address>{friend.email}</address>        
                    <button onClick={()=> setEditing(true)}>Edit</button>
                    <button onClick={()=> deleteFriend(friend.id)}>Delete</button>
                </div>
            }
        </div>
    )
}

export default Friend;