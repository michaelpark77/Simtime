import React from 'react'
import styled from 'styled-components'

import Calendar from "../D-Templates/Calendar/Calendar";
import DashedButton from "../A-Atomics/Button/DashedButton";
import Detail from "../D-Templates/Detail";
import Filter from "../C-Organisms/Filter"

const Wrap = styled.div`

    display : flex;
    flex-direction : row;
    justify-content: space-between;


    @media only screen and (max-width: 920px) {
        width: 100%;
        flex-direction : column;
    }

    overflow: hidden;
`

const LeftWrap = styled.div`
    width: 68.5%;
    height: 680px;
    display : flex;
    flex-direction : column;
    justify-content: flex-start;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`
const RightWrap = styled.div`
    width: 31%;
    height: 680px;
    display : flex;
    flex-direction : column;
    justify-content: flex-start;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`
const StyledFilter = styled(Filter)`
    margin-bottom: 8px;
`

const StyledCalendar  = styled(Calendar)`
`

const StyledDashedButton = styled(DashedButton)`
    margin-bottom: 8px;
    @media only screen and (max-width: 920px) {
        display : none;
    }
`

const StyledDetail = styled(Detail)`
    @media only screen and (max-width: 920px) {
        height: 100%;
    }
`

function CalendarPage() {
    return (
        <Wrap>
            <LeftWrap>
                <StyledFilter />
                <StyledCalendar height="98%" />
            </LeftWrap>
            <RightWrap>
                <StyledDashedButton />
                <StyledDetail height="98%" />
            </RightWrap>
        </Wrap>

    )
}

export default CalendarPage