import React from 'react'

const PersonCard = (props) => {
    return(
        <div style={{margin:'50px', textAlign: 'left'}}>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <br></br>
        </div>
    );
    
}
export default PersonCard
