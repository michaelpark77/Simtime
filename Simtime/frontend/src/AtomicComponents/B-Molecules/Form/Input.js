import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from "../../A-Atomics/Font/Paragraph"
import { MAIN_COLOR, ST_GRAY } from '../../Colors'

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: ${props => props.height};
    width: ${props => props.width};
`

const MyParagraph = styled(Paragraph)`
`

const MyInput = styled.input`
    ::placeholder {
        color: ${ST_GRAY};
        font-size: 15px;
    };

    width: ${props => props.name ?  "70%": "100%"};
    height: 100%;
    border : solid 1px ${MAIN_COLOR};
    border-radius : 6px;
    padding-left: 5px;
`

function Input(props) {
    const {width, height, name, desc} = props;
    return (
        <Wrap {...props}>
            { name && (<MyParagraph fontSize="18px" color="MAIN_COLOR">{name}</MyParagraph>) }
            <MyInput name={name} placeholder={desc}></MyInput>
        </Wrap>
    )
}

export default Input

Input.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string
  };
  
Input.defaultProps = {
    width : "100%",
    height : "40px",
    name: null,
    desc: null,
  };
  