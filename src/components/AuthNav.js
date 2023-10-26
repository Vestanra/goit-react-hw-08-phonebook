import { Flex } from "@chakra-ui/react";
import { StyledLink } from "./styled/styled";

export const AuthNav = () => {
    return (
        <Flex gap={8} color="white">
            <StyledLink to='/register'>Register</StyledLink>
            <StyledLink to='/login'>Log In</StyledLink>
        </Flex>
    );
};