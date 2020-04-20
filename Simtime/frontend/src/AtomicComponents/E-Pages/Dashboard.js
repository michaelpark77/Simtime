import React from 'react'
import styled from 'styled-components'

import CalWrap from "../../AtomicComponents/A-Atomics/Calendar/CalWrap";
import Button from "../A-Atomics/Button/Button";
import Calendar from "../../AtomicComponents/D-Templates/Calendar/Calendar";
import Detail from "../../AtomicComponents/D-Templates/Detail";

const Wrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-between;


    @media only screen and (max-width: 920px) {
        width: 100%;
        flex-direction : column;
    }
`

const LeftWrap = styled.div`
`
const RightWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
`

function Dashboard() {
    return (
        <Wrap>
            <LeftWrap>
                <CalWrap>
                    <Calendar />
                </CalWrap>
            </LeftWrap>

            <RightWrap>
                <Button />
                <Detail />
            </RightWrap>
        </Wrap>

    )
}

export default Dashboard
