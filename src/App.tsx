import { Button, Typography, useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value
    setMode(selectedMode as 'light' | 'dark' | 'system')
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='lable-select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='lable-select-dark-light-mode'
        id='demo-select-small'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          {/* Cách 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize='small' /> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          {/* 
            Cách 2: 
              sx: dùng để custom css cho một giá trị nào đó, custom nhanh
          */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <Typography variant='h3' color='text.secondary'>
        Hello anh em
      </Typography>
    </>
  )
}

export default App
