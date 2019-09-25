import React from "react";

const MemberCard = props => {
    console.log('card props', props)
    return (
        <>
        {props.members.map(member => (
            <div className="memberCard" key={member.id}>
            <div className="cardName">{member.name}</div>
            <div className="cardEmail">{member.email}</div>
            <div className="cardRole">{member.role}</div>
        </div>
        ))}
        
        </>
    )
}

export default MemberCard;