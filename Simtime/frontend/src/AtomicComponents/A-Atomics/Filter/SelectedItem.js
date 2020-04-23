import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ST_WHITE, ST_YELLOW_LIGHT} from '../../Colors'
import Paragraph from "../Font/Paragraph"
import Image from "../Image"


const ContentWrap = styled.div`
    height: 24px;
    background-color: ${ST_YELLOW_LIGHT};
    border-radius: 6px;

    display: flex;
    flex-direction : row;
    align-items : center;

    padding-left: 6px;
    padding-right: 6px;
`

const Content = styled(Paragraph)`
    margin-right: 6px;
`

const DeleteIcon = styled(Image)`
`

function SelectedItem(props) {
    return (
            <ContentWrap>
                <Content fontSize="12px" color="MAIN_COLOR">{props.children}</Content>
                <DeleteIcon src = "static/img/icons/close.png" width="8px" height="8px" />
            </ContentWrap>
    )
}


export default SelectedItem

SelectedItem.propTypes = {

  };

SelectedItem.defaultProps = {

};

