import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Paragraph from '../../A-Atomics/Font/Paragraph'
import ImageUser from '../../A-Atomics/ImageUser'

const Wrap = styled.div`
    width: auto;
    display : flex;
    flex-direction : row;
    justify-content: flex-end;
    align-items: center;
`

const Image = styled(ImageUser)`
`

const Name = styled(Paragraph)`
    padding-left: 15px;
    line-height: ${props=>props.height};
    text-decoration : underline;
`

const Logout = styled(Paragraph)`
    padding-left: 15px;
    text-decoration : underline;
`

function Account(props) {
    return (
        <Wrap {...props}>
            <Image url={props.url} width={props.imageSize} height={props.imageSize}/>
            <Name color= "ST_GRAY" fontSize="13px" height={props.imageSize}>{props.username}</Name>
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
    url: PropTypes.string, 
    username: PropTypes.string, 
    imageSize: PropTypes.string, 

  };

Account.defaultProps = {
    url:"https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
    username: "unknown",
    imageSize: "40px"

};

