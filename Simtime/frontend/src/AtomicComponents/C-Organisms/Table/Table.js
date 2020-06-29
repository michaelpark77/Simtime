import React, {Fragment} from 'react'
import styled from 'styled-components';

import TableRow from '../../A-Atomics/Table/TableRow'
import TableHeader from '../../A-Atomics/Table/TableHeader';
import TableTitle from '../../A-Atomics/Table/TableTitle';
import Header from '../../A-Atomics/Font/Header';

import ButtonWithImage from '../../B-Molecules/Button/ButtonWithImage'
import UserCardForList from '../../B-Molecules/User/UserCardForList'

const StyledTableTitle = styled(TableTitle)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left : 10px;
`


const StyledHeader = styled(Header)`
    height: ${props=> props.height};
`
const StyledTableRow = styled(TableRow)`
`

const UserCard = styled(UserCardForList)`
    
`


function Table() {
    
    return (
        <Fragment>
        <StyledTableTitle><Header type="h4" height="22px">내가 등록한 친구</Header>
        <ButtonWithImage height="22px" width="auto" imgurl="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png">친구추가</ButtonWithImage></StyledTableTitle>
        <TableHeader>hello?</TableHeader>
            <TableRow rowNum={1}><UserCard imageSize="32px">1</UserCard><div>2</div></TableRow>
            <TableRow rowNum={2}><UserCard imageSize="32px">1</UserCard><div>2</div><div>3</div></TableRow>
            <TableRow rowNum={3}><UserCard imageSize="32px">1</UserCard><div>2</div><div>3</div></TableRow>
            <TableRow rowNum={4}><UserCard imageSize="32px">1</UserCard><div>2</div></TableRow>
        </Fragment>
        
    )
}

export default Table

Table.propTypes = {

};
  
Table.defaultProps = {

};
  
