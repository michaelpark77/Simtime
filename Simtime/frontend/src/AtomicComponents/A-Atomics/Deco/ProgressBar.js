import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ST_GRAY} from '../../Colors'

const Bar = styled.div`
    width: ${props=> props.width};
    background-color: ${ST_GRAY};
    height: 4px;
    border-radius: 2px;
`
function ProgressBar() {
    return (
        <Bar>
        </Bar>
    )
}

export default ProgressBar

Image.propTypes = {
    width: PropTypes.string,
    steps: PropTypes.number,
  };

Image.defaultProps = {
    width: "80%",
    steps: 3

};
  
