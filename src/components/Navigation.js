import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { StyledLink } from "./styled/styled";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Flex as="nav" gap={8} >
            <StyledLink to='/' >Home</StyledLink>
            {isLoggedIn && (
                <StyledLink to='/contacts'>Phone book</StyledLink>
             )} 
        </Flex>
    );
};