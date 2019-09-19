import React, { useState } from "react";

const MemberForm = (props) => {
    console.log('form props', props)
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setMember({...member, [e.target.name] : e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({
            name: "",
            email: "",
            role: ""
            });
    };

    return (
        <form onSubmit={submitForm} className="addForm" >
            <div className="inputFields">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" onChange={changeHandler} placeholder="New Member Name"/>
                <label htmlFor="email"></label>
                <input type="text" name="email" id="email" onChange={changeHandler} placeholder="Email"/>
                <label htmlFor="role"></label>
                <input type="text" name="role" id="role" onChange={changeHandler} placeholder="Role"/>
            </div>
            <div className="submitButton">
                <button type="submit">Add</button>
            </div>
        </form>
    )
};

export default MemberForm;