import React from 'react'
import styled from 'styled-components'
import { ST_GRAY_LIGHT, ST_WHITE } from '../Colors'
import { Title } from '../atoms/Title'
import Button from '../atoms/Button'
const Row = styled.div`
  background-color: ${props => props.odd ? ST_GRAY_LIGHT : ST_WHITE};
  display: flex;
  align-items: center;
`
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
`
const StyledTitle = styled(Title)`
  flex: 1;
  padding-left: 5px;
`
const CheckImage = styled.img.attrs({
  src: 'https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check.png'
})`
  width: 14px;
  height: 14px;
`
export const ButtonRow = props => {
  return (
    <Row>
      {props.profileImage && <ProfileImage src={props.profileImage} />}
      <StyledTitle type='h4'>{props.title}</StyledTitle>
      {props.buttons?.map(button => {
        console.log('button')
        console.log(button)
        return (
          <Button key={button.title} type={button.type} onClick={button.onClick}>{button.title}</Button>
        )
      })}
    </Row>
  )
}

export const SelectableRow = props => {
  return (
    <Row>
      {props.profileImage && <ProfileImage src={props.profileImage} />}
      <StyledTitle type='h3'>{props.title}</StyledTitle>
      {props.isSelected && <CheckImage />}
    </Row>
  )
}