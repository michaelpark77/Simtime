import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { MAIN_COLOR, ST_GRAY, ST_WHITE } from '../../Colors'
import PropTypes, { object } from 'prop-types'

import Paragraph from "../Font/Paragraph"

const Wrap = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${ ST_WHITE};

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Option = styled(Paragraph)`
 color: ${props => props.isSelected ? MAIN_COLOR : ST_GRAY };

`;



function RadioText(props) {
    const {selectedId, setSelectedId} = useState(0);
    return (
        <Wrap {...props}>
            <Option isSelected={true}>ALL</Option>
            <Option isSelected={false}>확정</Option>
            <Option isSelected={false}>대기</Option>
        </Wrap>
    )
}

export default RadioText

RadioText.propTypes = {
    width: PropTypes.string, 
    height: PropTypes.string, 
  };

RadioText.defaultProps = {
    width: "120px",
    height: "30px"
};

