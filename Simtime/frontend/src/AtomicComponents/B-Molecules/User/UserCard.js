import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {MAIN_COLOR, TEXT} from '../../Colors'
import Paragraph from '../../A-Atomics/text/Paragraph'
import ImageUser from '../../A-Atomics/ImageUser'


const Wrap = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: flex-start;
    align-items: flex-end;
`

const Image = styled(ImageUser)`
    margin-right: 2px;
`

const Name = styled(Paragraph)`
    font-weight: 600;
`

function UserCard(props) {
    return (
        <Wrap {...props}>
            <Image />
            <Name fontSize="14px">{props.username}</Name>
        </Wrap>
    )
}

// const mapStateToProps = (state) => ({
//   username : state.user.username
// });

// export default connect(mapStateToProps, {})(UserCard);

export default UserCard

UserCard.propTypes = {
    username: PropTypes.string, 
  };

UserCard.defaultProps = {
    username: "unknown"
};

