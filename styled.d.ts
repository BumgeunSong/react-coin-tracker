// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    background: string,
    primary50: string,
    background50: string,
    secondary50: string,
  }
}