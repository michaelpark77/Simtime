import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR} from '../Colors'
import DetailTitle from '../C-Organisms/DetatilTitle'



const Wrap = styled.div`
    border : solid 1px ${MAIN_COLOR};
    width: ${props=> props.width};
    height: ${props=> props.height};
    background-color: 

    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;

        @media only screen and (max-width: 920px) {
        width: 100%;
    }
`

function Detail(props) {
    return (
        <Wrap {...props}>
            <DetailTitle />
            
        </Wrap>
    )
}

export default Detail

Detail.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

  Detail.defaultProps = {
    height: "618px",
    width: "284px",
};
  
