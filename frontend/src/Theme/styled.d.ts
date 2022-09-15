import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeType: string;
    colors: {
      background: string;
      text: string;
    };
    header: {
      background: string;
      text: string;
    };
    footer: {
      background: string;
      text: string;
    };
    section: {
      background: string;
      text: string;
    };
  }
}
