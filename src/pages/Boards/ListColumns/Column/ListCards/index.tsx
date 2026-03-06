import { Box } from '@mui/material'
import Card from './Card'

interface PropTypes {
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
}

function ListCards({ cards }: PropTypes) {
  return (
    <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)} - ${theme.trelloCustom.columnHeaderHeight} - ${theme.trelloCustom.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da',
          borderRadius: '8px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  )
}

export default ListCards
