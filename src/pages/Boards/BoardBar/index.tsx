import { Box, Button, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: 0,
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        paddingX: 2,
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label='MERN Stack Board' clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLockIcon />} label='Public/Private Workspace' clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDriveIcon />} label='Add To Google Drive' clickable sx={MENU_STYLES} />
        <Chip icon={<BoltIcon />} label='Automation' clickable sx={MENU_STYLES} />
        <Chip icon={<FilterListIcon />} label='Filter' clickable sx={MENU_STYLES} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
          variant='outlined'
          startIcon={<PersonAddIcon />}
        >
          Invate
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '5px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white'
            }
          }}
        >
          <Tooltip title='Remy Sharp'>
            <Avatar alt='Remy Sharp' src='https://mockmind-api.uifaces.co/content/human/217.jpg' />
          </Tooltip>
          <Tooltip title='Travis Howard'>
            <Avatar alt='Travis Howard' src='https://mockmind-api.uifaces.co/content/human/219.jpg' />
          </Tooltip>
          <Tooltip title='Cindy Baker'>
            <Avatar alt='Cindy Baker' src='https://mockmind-api.uifaces.co/content/human/222.jpg' />
          </Tooltip>
          <Tooltip title='Agnes Walker'>
            <Avatar alt='Agnes Walker' src='https://mockmind-api.uifaces.co/content/human/125.jpg' />
          </Tooltip>
          <Tooltip title='Trevor Henderson'>
            <Avatar alt='Trevor Henderson' src='https://mockmind-api.uifaces.co/content/human/128.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
