import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR} from '../../Colors'
import Paragraph from '../../A-Atomics/Font/Paragraph'


const Wrap = styled.div`
    width: ${props=> props.width};
    height: ${props=> props.height};

    display : flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

const Content = styled(Paragraph)`
`

const Icon = styled.div`
    background-size: cover;
    background-image: url("${props=>props.url}");
    background-position: center center;
    width: 14px;
    height: 14px;
    margin-left : 4px;
`


function ButtonWithImage(props) {
    return (
        <Wrap {...props}>
            <Content color="TEXT" fontSize="14px" >{props.children}</Content>
            <Icon url = {props.imgurl} />
        </Wrap>
    )
}

export default ButtonWithImage

ButtonWithImage.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    imgurl: PropTypes.string
  };

ButtonWithImage.defaultProps = {
    height: "46px",
    width: "100%",
    imgurl: "static/img/icons/edit2.png"
};
  
