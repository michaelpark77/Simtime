import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrap = styled.div`
`

const Img = styled.div`
    background-size: cover;
    background-image: url("${props=>props.src}");
    background-position: center center;

    width: ${props=>props.width};
    height: ${props=>props.height};
`

function Image(props) {
    return (
        <Wrap>
            <Img {...props}/>
        </Wrap>
    )
}

export default Image


Image.propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

Image.defaultProps = {
    src: "static/img/icons/forbidden.png",
    width: "14px",
    height:"14px"
};
  
