import React from 'react'
import {MAIN_COLOR} from '../../Colors'
import Paragraph from '../text/Paragraph'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Wrap = styled.div`
    border : solid 1px ${MAIN_COLOR};
    width: ${props=> props.width};
    height: ${props=> props.height};

    @media only screen and (max-width: 920px) {
        width: 100%;
      }

    display : flex;
    justify-content: center;
    align-items: center;
`

const Content = styled(Paragraph)`
    text-decoration: underline;
    font-size: 18px;
`

function Button(props) {
    return (
        <Wrap {...props}>
            <Content color="MAIN_COLOR" fontSize="18px">
                Add a new event
            </Content>
            
        </Wrap>
    )
}

export default Button

Button.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

Button.defaultProps = {
    height: "46px",
    width: "284px",
};
  
