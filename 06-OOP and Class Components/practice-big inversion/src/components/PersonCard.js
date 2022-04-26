import React, {Component} from 'react'
class PersonCard extends Component {
    render() {
        const { lastName, firstName, age, hairColor } = this.props
        return(
            <div style={{margin:'50px', textAlign: 'left'}}>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <br></br>
            </div>
        );
    }
}
export default PersonCard
