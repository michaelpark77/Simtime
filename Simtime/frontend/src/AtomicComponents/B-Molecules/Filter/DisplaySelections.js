import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ST_WHITE, ST_YELLOW_LIGHT} from '../../Colors'
import SelectedItem from "../../A-Atomics/Filter/SelectedItem"


const Wrap = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${ST_WHITE};
    display: flex;
    flex-direction : row;
    align-items : center;
    padding: 3px 3px 3px 3px;
`;

const StyledSelectedItem = styled(SelectedItem)`
    margin-right: 2px;
`

function DisplaySelections(props) {
    const {width, height} = props;
    return (
        <Wrap width={width} height={height}>
            <StyledSelectedItem>All</StyledSelectedItem>
            <StyledSelectedItem>공파리</StyledSelectedItem>
            <StyledSelectedItem>이겟겟겟...</StyledSelectedItem>
        </Wrap>
    )
}


export default DisplaySelections

DisplaySelections.propTypes = {
    width: PropTypes.string, 
    height: PropTypes.string, 
  };

DisplaySelections.defaultProps = {
    width: "246px",
    height: "30px",
};

