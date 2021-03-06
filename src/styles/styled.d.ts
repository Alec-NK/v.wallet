import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,

      white: string,
      black: string,
      gray: string,

      darkselect: string,
      lightselect: string,

      success: string,
      info: string,
      warning: string,
      purple: string
    }
  }
}
