import React from 'react'
import styled from 'styled-components'

import FilWrap from "../../AtomicComponents/A-Atomics/Filter/FilWrap";

import CalWrap from "../../AtomicComponents/A-Atomics/Calendar/CalWrap";
import Calendar from "../../AtomicComponents/D-Templates/Calendar/Calendar";

import DashedButton from "../A-Atomics/Button/DashedButton";
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
    display : flex;
    flex-direction : column;
    justify-content: space-between;
`
const RightWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between;
`

const StyledCalWrap = styled(CalWrap)`
    margin-top: 6px;
`

const StyledDetail = styled(Detail)`
    margin-top: 6px;
`

function Dashboard() {
    return (
        <Wrap>
            <LeftWrap>
                <FilWrap></FilWrap>

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
