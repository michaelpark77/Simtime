import React from 'react'
import styled from 'styled-components'
import { Title } from '../atoms/Title'
import { ButtonRow, SelectableRow } from '../molecules/TableRow'
const TableWrap = styled.div`

`
const TableHead = styled.div`

` 
const StyledTitle = styled(Title)`

`
const AddButton = styled.button`

`
const TableMain = styled.div`

`
const Table = props => {
  const { title, onClickAddButton, rows = [], type } = props
  return (
    <TableWrap>
      <TableHead>
        <StyledTitle>{title}</StyledTitle>
        <AddButton onClick={onClickAddButton}>add</AddButton>
      </TableHead>
      <TableMain>
        {rows?.map(row => {
          if (row.type === 'button') {
            return (
              <ButtonRow key={row.key} {...row} />
            )
          }
          return (
            <SelectableRow key={row.key} {...row} />
          )
        })}
      </TableMain>
    </TableWrap>
  )
}

export default Table
