import styled from "styled-components";

export const FooterContainer: any = styled.div`
  background: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.text};
  box-shadow: 0 -4px 18px 4px grey;
  margin-top: 28px;
}
`;
