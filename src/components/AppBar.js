import { useSelector } from "react-redux";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";
import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { Box, Button, Container, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const AppBar = () => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box as="header"
            bg={colorMode === 'dark' ? "blue.800" : "blue.700"}
            fontSize="xl" fontWeight={500}>
            <Container maxW="container.lg"  display="flex" justifyContent="space-between" alignItems="center" p={5} >
                <Flex gap={8} >
                <Navigation  />
                {isLoggenIn ? <UserMenu /> : <AuthNav />}
            </Flex>
                <Button w={6} onClick={toggleColorMode}>{colorMode === 'light'
                    ? <MoonIcon w={6} h={6} color="blue.900" />
                    : <SunIcon w={6} h={6} color="yellow.300"/>}</Button>
            </Container>
        </Box>
    )
};

export default AppBar;