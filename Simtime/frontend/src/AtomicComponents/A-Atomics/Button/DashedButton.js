import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR} from '../../Colors'
import Paragraph from '../text/Paragraph'


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
    font-weight: 500;
    font-size: 18px;
`

const Icon = styled.div`
    background-size: cover;
    background-image: url("static/img/icons/edit2.png");
    background-position: center center;
    width: 14px;
    height: 14px;
    margin-right : 4px;
`


function DashedButton(props) {
    return (
        <Wrap {...props}>
            <Icon />
            <Content color="MAIN_COLOR" fontSize="18px">
                Add a new event
            </Content>
        </Wrap>
    )
}

export default DashedButton

DashedButton.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

  DashedButton.defaultProps = {
    height: "46px",
    width: "284px",
};
  
