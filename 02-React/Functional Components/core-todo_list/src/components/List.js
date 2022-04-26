import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
    column-gap: 25px;
`;

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    border-radius: 10%;
    box-shadow: 1px 1px black;
`;

const List = (props) => {
    const itemComplete = [];

    if (props.item.complete) {
        itemComplete.push('complete');
    };
    
    return(
        <StyledDiv>
            <input type='checkbox' checked={props.item.complete} onChange={ (e) => props.toggleComplete(props.index)}/>
            <span className={itemComplete} >{props.item.name}</span>
            <StyledButton type='submit' onClick={ (e) => props.deleteItem(props.index)}>Delete</StyledButton>
        </StyledDiv>
    );
};
export default List;