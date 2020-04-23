import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrap = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

`;

const Select = styled.select`
    padding-left: 4px;
    background-size: 15px;
    background-repeat: no-repeat;
    background-image: url("static/img/icons/arrow-down2.png");
    background-position: 92% center;
    width: ${props => props.width};
    height: ${props => props.height};
    border-width: 0px;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    font-size: 15px;
    font-weight: 400;

    select::--ms-expand { opacity:0; }
`


function SelectBox(props) {
    return (
        <Wrap>
            <Select width={props.width} height={props.height}>
                <option>Group</option>
                <option>Group2</option>
                <option>Group3</option>
            </Select>
        </Wrap>
    )
}

export default SelectBox

SelectBox.propTypes = {
    width: PropTypes.string, 
    height: PropTypes.string, 
  };

SelectBox.defaultProps = {
    width: "80px",
    height: "30px"

};

