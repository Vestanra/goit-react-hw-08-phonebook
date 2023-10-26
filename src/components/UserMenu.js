import { Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (
        <Flex gap={4} color="white">
            <p>Welcome, <Text as="span" fontStyle="italic">{user.name}</Text></p>
            <Button type='button' onClick={()=>dispatch(logout())} size='s' py={1} px={4}>Logout</Button>
        </Flex>
    )
}