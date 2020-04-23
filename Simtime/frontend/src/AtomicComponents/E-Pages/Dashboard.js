import React from 'react'
import styled from 'styled-components'

import CalWrap from "../../AtomicComponents/A-Atomics/Calendar/CalWrap";
import Calendar from "../../AtomicComponents/D-Templates/Calendar/Calendar";

import DashedButton from "../A-Atomics/Button/DashedButton";
import Detail from "../../AtomicComponents/D-Templates/Detail";

import Filter from "../C-Organisms/Filter"

const Wrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    height: 680px;
    @media only screen and (max-width: 920px) {
        width: 100%;
        flex-direction : column;
    }
`

const LeftWrap = styled.div`
    width: 68.5%;
    height: 100%;
    display : flex;
    flex-direction : column;
    justify-content: space-around;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`
const RightWrap = styled.div`
    width: 31%;
    height: 100%;
    display : flex;
    flex-direction : column;
    justify-content: space-around;

    
    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`

const StyledCalWrap = styled(CalWrap)`

`

const StyledDetail = styled(Detail)`

`

function Dashboard() {
    return (
        <Wrap>
            <LeftWrap>
                <Filter></Filter>
                <StyledCalWrap>
                    <Calendar />
                </StyledCalWrap>
            </LeftWrap>

            <RightWrap>
                <DashedButton />
                <StyledDetail />
            </RightWrap>
        </Wrap>

    )
}

export default Dashboard
