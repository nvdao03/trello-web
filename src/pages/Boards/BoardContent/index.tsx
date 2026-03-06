import { Box } from '@mui/material'
import ListColumns from '../ListColumns'
import { mapOrder } from '../../../utils/sorts'

interface PropTypes {
  board: {
    _id: string
    title: string
    description: string
    type: string
    ownerIds: never[]
    memberIds: never[]
    columnOrderIds: string[]
    columns: {
      _id: string
      boardId: string
      title: string
      cardOrderIds: string[]
      cards: (
        | {
            _id: string
            boardId: string
            columnId: string
            title: string
            description: string
            cover: string
            memberIds: string[]
            comments: string[]
            attachments: string[]
          }
        | {
            _id: string
            boardId: string
            columnId: string
            title: string
            description: null
            cover: null
            memberIds: never[]
            comments: never[]
            attachments: never[]
          }
      )[]
    }[]
  }
}

function BoardContent({ board }: PropTypes) {
  const orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')

  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0'
      }}
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}

export default BoardContent
