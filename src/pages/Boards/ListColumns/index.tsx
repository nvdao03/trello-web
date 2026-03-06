import { Box, Button } from '@mui/material'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Column from './Column'

interface PropTypes {
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

function ListColumns({ columns }: PropTypes) {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      {/* List Columns */}
      {columns.map((column) => (
        <Column key={column._id} column={column} />
      ))}

      {/* Box Add New Column */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}
      >
        <Button
          sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
