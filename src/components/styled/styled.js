import styled from "@emotion/styled";
import { ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";

export const ErrorText = styled(ErrorMessage)`
color: #ECC94B;
`;

export const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: #ECC94B;
  }
`;