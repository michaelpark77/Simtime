import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from '../../A-Atomics/Font/Paragraph'
import ImageUser from '../../A-Atomics/ImageUser'


const Wrap = styled.div`
    width: 100%;
    display : flex;
    flex-direction : row;
    justify-content: space-between;
    align-items: center;
`

const Image = styled(ImageUser)`
`

const Name = styled(Paragraph)`
    text-decoration : underline;
`

const Logout = styled(Paragraph)`
    text-decoration : underline;
`

function Account(props) {
    return (
        <Wrap {...props}>
            <Image  width={props.imageSize} height={props.imageSize}/>
            <Name  color= "ST_GRAY" fontSize="13px">{props.username}</Name>
            <Logout color= "ST_GRAY" fontSize="13px">Logout</Logout>
        </Wrap>
    )
}

// const mapStateToProps = (state) => ({
//   username : state.user.username
// });

// export default connect(mapStateToProps, {})(UserCard);

export default Account

Account.propTypes = {
    username: PropTypes.string, 
    imageSize: PropTypes.string, 
  };

Account.defaultProps = {
    username: "unknown",
    imageSize: "40px"

};

