import { Box } from '@mui/material'
import ListColumns from '../ListColumns'
import { mapOrder } from '../../../utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

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
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10 // Kích hoạt khi di chuyển chuột 10px
    }
  })
  const sensors = useSensors(pointerSensor)

  const [orderedColumnsState, setOrderedColumns] = useState<typeof board.columns>([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board.columns, board.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return // Nếu không có vị trí mới (over) thì không làm gì
    // Chỉ xử lý nếu vị trí mới khác với vị trí cũ
    if (active.id !== over.id) {
      const oldIndex = orderedColumnsState.findIndex((c) => c._id === active.id) // Lấy vị trí cũ từ thằng active.id
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id) // Lấy vị trí mới từ thằng over.id
      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex) // Sắp xếp lại mảng theo vị trí mới
      setOrderedColumns(dndOrderedColumns) // Cập nhật state với mảng đã sắp xếp
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trelloCustom.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumnsState} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
