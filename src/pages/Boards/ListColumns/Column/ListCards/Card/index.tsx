import { Button, Card as MuiCard, Typography } from '@mui/material'

import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

interface PropTypes {
  card:
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
}

function Card({ card }: PropTypes) {
  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}
    >
      {card.cover && <CardMedia sx={{ height: 140 }} image={card.cover} title={card.title} />}
      <CardContent
        sx={{
          p: 1.5,
          '&:last-child': {
            p: 1.5
          }
        }}
      >
        <Typography gutterBottom component='div'>
          {card.title}
        </Typography>
        <Typography color='text.secondary'>{card.description}</Typography>
      </CardContent>
      {shouldShowCardActions() && (
        <CardActions
          sx={{
            p: '0 4px 8px 4px'
          }}
        >
          {!!card?.memberIds?.length && (
            <Button size='small' startIcon={<GroupIcon />}>
              {card?.memberIds?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size='small' startIcon={<CommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button size='small' startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card
