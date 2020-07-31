import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Title } from '../atoms/Title'
import Table from '../Organisms/Table'
import { getGroups } from '../../actions/groups'
import { getFriends, deleteFriend, editFriend } from '../../actions/friends'
import { connect } from 'react-redux'

const Section = styled.section`

`
const SectionMain = styled.main`
  
`

const FriendsPage = props => {
  
  useEffect(() => {
    props.getGroups()
    props.getFriends()

  }, [])

  const friends = props.friends?.map(friend => {
    const {relationshipId, username: title, profile_image: profileImage, friendId, dispatch, subscribe} = friend
    return ({
      type: 'button',
      title,
      profileImage,
      buttons: [
        {title: '수신차단', onClick: () => props.editFriend({id: friendId, subscribe: !subscribe})},
        {title: '발신차단', onClick: () => props.editFriend({id: friendId, dispatch: !dispatch})},
        {title: '친구삭제', onClick: async () => {
          await props.deleteFriend(relationshipId)
          props.getFriends()
        }}
      ]
    })
  })
  
  return (
    <div>
      <Section>
        <Title type='h3' mainColor >Friends</Title>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <Table title='My friends' rows={friends} />
          </div>
          <div style={{flex: 1}}>
            <Table title='Hosts' />
          </div>
        </div>
        
      </Section>
      <Section>
        <Title type='h3' mainColor >Groups</Title>
      </Section>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  groups: state.groups.groups,
  friends: state.friends.friends
})

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => dispatch(getGroups()),
    getFriends: () => dispatch(getFriends()),
    getFriend: (id) => dispatch(getFriend(id)),
    deleteFriend: (id) => dispatch(deleteFriend(id)),
    editFriend: (id) => dispatch(editFriend(id))
    // getHosts: () => dispatch(getHost())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
