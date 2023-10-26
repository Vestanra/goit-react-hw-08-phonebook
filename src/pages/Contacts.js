import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";
import { selectError, selectIsLoading } from "redux/contacts/contactsSlice";
import { selectVisibleContacts } from "redux/contacts/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const visibleContacts = useSelector(selectVisibleContacts);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        <Flex direction="column" alignItems="center">
            <Heading as="h1" mt={6} mb={6}>Phonebook</Heading>
            <ContactForm />
            <Filter />
            <Heading as="h2" fontSize='xl'>Contacts ({visibleContacts.length})</Heading>
            {isLoading && <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />}
            <ContactList />
            {error && <Text as="p" color="orange.500" mt={3} fontSize="xl">Oops... Something went wrong</Text>}
        </Flex>
    )
};

export default Contacts;