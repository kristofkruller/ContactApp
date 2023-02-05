import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg: string;
      actions: string;
      highlight: string;
      pressed: string;
      hovered: string;
      focused: string;
    };
  }
}
