import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR, ST_GRAY} from '../Colors'
import Header from '../A-Atomics/text/Header'
import Paragraph from '../A-Atomics/text/Paragraph'
import UserCard from '../B-Molecules/User/UserCard'
import Image from "../A-Atomics/Image"

const Wrap = styled.div`
    width: ${props=> props.width};
    height: ${props=> props.height};
    display : flex;
    flex-direction : column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 4px 8px 8px;
    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`

const TitleWrap = styled.div`
    height: 30px;
    width: 100%;

`

const StyledTitle = styled(Paragraph)`
    font-weight: 500;
    vertical-align: middle;
`

const ContentWrap = styled.div`
    height: 400px;
    width: 94%;

`
const Content = styled.div`
    border-top : dashed 1px ${ST_GRAY};
    height: 30px;
`

function DetailContent(props) {
    return (
        <Wrap {...props}>
            <TitleWrap>
                <StyledTitle fontSize="15px" color="MAIN_COLOR">Details</StyledTitle>
            </TitleWrap>
            <ContentWrap>
                <Content> gedd </Content>
            </ContentWrap>
        </Wrap>
    )
}

export default DetailContent

DetailContent.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

DetailContent.defaultProps = {
    height: "22%",
    width: "100%",
};

