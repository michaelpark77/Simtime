import React from 'react'
import styled from 'styled-components'

import CalWrap from "../../AtomicComponents/A-Atomics/Calendar/CalWrap";
import Button from "../../AtomicComponents/A-Atomics/Button/Button";
import Calendar from "../../AtomicComponents/D-Templates/Calendar/Calendar";

const Wrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-between;
`


function Dashboard() {
    return (
        <Wrap>
            <CalWrap>
                <Calendar />
            </CalWrap>
            <Button />
        </Wrap>

    )
}

export default Dashboard
