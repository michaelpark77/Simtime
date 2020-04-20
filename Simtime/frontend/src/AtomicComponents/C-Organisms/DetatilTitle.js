import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR} from '../Colors'
import Header from '../A-Atomics/text/Header'
import Paragraph from '../A-Atomics/text/Paragraph'
import UserCard from '../B-Molecules/User/UserCard'
import Image from "../A-Atomics/Image"

const Wrap = styled.div`
    border-bottom : solid 1px ${MAIN_COLOR};
    width: ${props=> props.width};
    height: ${props=> props.height};

    display : flex;
    flex-direction : column;
    justify-content: start;
    align-items: start;

    padding: 8px 4px 8px 8px;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`

const UpsideWrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-contens: flex-start;
    margin-bottom : 8px;
    border: solid 1px red;
`

const DownsideWrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-contens: flex-start;
    
    border: solid 1px green;
`

const TitleWrap = styled.div`
    padding-bottom : 4px;
    display : flex;
    flex-direction : row;
    justify-contens: flex-start;
`

const Title = styled(Header)``

const TagsWrap = styled.div`
    height: 40px;
    padding-left: 10px;

`
const Tags = styled(Paragraph)`
    padding-right: 3px;

`

const TitleImageWrap = styled.div`
    border: solid 1px red;
    height: 100%
`
const TitleImage = styled(Image)`
    

`

const UserCardWrap = styled.div`

`


function DetailTitle(props) {
    return (
        <Wrap {...props}>
            <UpsideWrap>
                <div>
                    <TitleWrap>
                        <Title type="h3" color="MAIN_COLOR">Tremblant in Canada</Title>
                    </TitleWrap>
                    <TagsWrap>
                        <Tags type="tag">#치맥</Tags>
                        <Tags type="tag">#한강</Tags>
                        <Tags type="tag">#나들이</Tags>
                        <Tags type="tag">#봄맞이</Tags>
                        <Tags type="tag">#치맥</Tags>
                        <Tags type="tag">#한강</Tags>
                        <Tags type="tag">#나들이</Tags>
                        <Tags type="tag">#봄맞이</Tags>
                    </TagsWrap>
                </div>

                <TitleImageWrap>
                    <TitleImage width="40px" height="40px"/>
                </TitleImageWrap>
            </UpsideWrap>
            <DownsideWrap>
                <UserCardWrap>
                    <UserCard />
                </UserCardWrap>
            </DownsideWrap>
        </Wrap>
    )
}

export default DetailTitle

DetailTitle.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
  };

DetailTitle.defaultProps = {
    height: "23%",
    width: "100%",
};

