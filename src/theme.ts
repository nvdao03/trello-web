import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// 1. Mở rộng type cho theme
declare module '@mui/material/styles' {
  interface Theme {
    trelloCustom: {
      appBarHeight: string
      boardBarHeight: string
    }
  }
  // Nếu muốn dùng theme.options
  interface ThemeOptions {
    trelloCustom?: {
      appBarHeight?: string
      boardBarHeight?: string
    }
  }
}

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
})

export default theme
