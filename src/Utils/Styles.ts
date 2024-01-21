import { css } from "styled-components";

export const borderRadius20px = css`
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const BasicButton = css`
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
