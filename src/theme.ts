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
  },
  typography: {
    fontFamily: 'Inter'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    // MuiOutlinedInput dùng để override cho TextField, đây là 1 class con của TextField
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
              }
            },
            '& fieldset': {
              borderWidth: '1px !important'
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    }
  }
})

export default theme
