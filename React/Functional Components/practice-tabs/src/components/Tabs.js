import react, {useState} from 'react'
import styled from 'styled-components'



const Tab = styled.button`
    backgroundColor: white;
    color: black;
    height: 30px;
    width: 100px;
`;


const TabGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const cups = ['Nothing', 'Gold Cup', 'Plain Cup', 'Silver Cup']

const Tabs = () => {
    const [active, setActive] = useState(cups[0])
    return(
    <div>
        <TabGroup>
            { cups.map ( (cup, index) => (
                <Tab key={index} onClick={ () => setActive(cup) } style={ cup === active ? {backgroundColor: 'black', color: 'white'} : {Tab} }>
                    {cup}
                </Tab>
            ))}
        </TabGroup>
        <p/>
        <p>You have choosen {active}.</p>
    </div>
    )
}

export default Tabs