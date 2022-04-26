import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.hairColor = props.hairColor
        this.state = {personAge: props.age}
        };
    

    birthdayClick = () => {
        this.setState({ personAge: this.state.personAge + 1})
    };

    render() {        
        return(
                <div style={{margin:'50px', textAlign: 'left'}}>
                    <h2>{this.lastName}, {this.firstName}</h2>
                    <p>Age: {this.state.personAge}</p>
                    <p>Hair Color: {this.hairColor}</p>
                    <button onClick={ this.birthdayClick }>Birthday Button for {this.firstName} {this.lastName}</button>
                </div>
            );
    }
}

export default PersonCard;
