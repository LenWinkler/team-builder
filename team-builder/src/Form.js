import React from "react";
import MemberForm from "./MemberForm";
import MemberCard from "./MemberCard";

const Form = (props) => {
    console.log('main form props', props)
    return(
       <div className="formWrapper">
            <MemberForm addNewMember={props.addNewMember}/>

            <MemberCard  members={props.members}/>
       </div> 
    )
}

export default Form;