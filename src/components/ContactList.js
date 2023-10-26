import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/filterSlice";
import { deleteContact } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/contactsSlice";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectVisibleContacts);
    const isError = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    return (
        <Box w={500}>
            <ul>
            {visibleContacts.map(({ id, name, number }) =>
                <Flex as="li" key={id} justify="space-between"  alignItems="center" border='1px' mb={0.5} p={1} pr={2} pl={2}>
                    <p><Text as="span" fontWeight={500} mr={2}>{name}:</Text>{number}</p>
                    <Button type="button" onClick={() => dispatch(deleteContact(id))} colorScheme="gray">Delete</Button>
                </Flex>)}
                {visibleContacts.length <= 0 && !isError && !isLoading &&
                    <Text as="p" display="flex" justifyContent="center" mt={2}>You don't have contacts</Text>}
      </ul>
        </Box>
    )
}

