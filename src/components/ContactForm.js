import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/operations';
import { Box, Button, Flex, FormControl, FormLabel, Input, VStack, useColorMode, useToast } from '@chakra-ui/react';
import { ErrorText } from './styled/styled';


const phoneRegExp = /^\d{3}-\d{3}-\d{4}$/;

const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(1, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .matches(phoneRegExp, 'Incorrect phone, example(111-111-1111)')
     .required('Required'),
 });

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const toast = useToast();
    const { colorMode } = useColorMode();

    return (
        <Flex  align="center"   >
            <Box bg={colorMode === 'dark' ? "gray.400" : "gray.100"} p={6} rounded="md" w={500}>
                <Formik
                    initialValues={{ name: "", number: "" }}
                    validationSchema={SignupSchema}
            
                    onSubmit={(value, action) => {
                        if (contacts.some(el => el.name === value.name)) {
                            return toast({
                                title: `${value.name} is already in contacts.`,
                                status: 'info',
                                duration: 2000,
                                isClosable: true,
                                position: 'top',
                            });
                        }
                        dispatch(addContact(value));
                        toast({
                            title: `Contact ${value.name} created.`,
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                            position: 'top',
                        });
                        action.resetForm();
                    }}
                >
                    <Form >
                        <VStack spacing={4} align="flex-start">
                            <FormControl htmlFor="name">
                                <FormLabel>Name</FormLabel>
                                <Field type="text" name="name" id="name" as={Input} variant="filled" bg={colorMode === 'dark' ? "gray.300" : "gray.50"} />
                                <ErrorText component="span" name="name" color="yellow.400" />
                            </FormControl>
                            <FormControl htmlFor="number">
                                <FormLabel>Number</FormLabel>
                                <Field type="tel" name="number" id="number" placeholder="000-000-0000" as={Input} variant="filled" bg={colorMode === 'dark' ? "gray.300" : "gray.50"} />
                                <ErrorText component="span" name="number" />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" bg={colorMode ==='dark'?"blue.600":"blue.700"} width="full" disabled={isLoading}>Add contact</Button>
                        </VStack>
                    </Form>
                </Formik>
            </Box>
        </Flex>
        
    )
};
