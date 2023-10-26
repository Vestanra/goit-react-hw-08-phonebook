import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import { Suspense } from "react";
import { Container, Spinner } from "@chakra-ui/react";

const Layout = () => {
    return (
        <div>
            <AppBar />
            <Container maxW="container.lg" p={0}>
                <Suspense fallback={<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' ml={10} />}>
                    <Outlet />
                </Suspense>
            </Container>
        </div>
    )
};

export default Layout;