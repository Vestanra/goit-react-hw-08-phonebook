import { Box, Button, Flex, FormControl, FormLabel, Input, VStack, useColorMode } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";
import { ErrorText } from "./styled/styled";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    return (
        <Flex bg={colorMode ==='dark'?"gray.600":"gray.200"} align="center" justify="center" h="100vh">
            <Box bg={colorMode ==='dark'?"gray.400":"gray.100"} p={6} rounded="md">
                <Formik
                    initialValues={
                        {
                            email: '',
                            password: '',
                        }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={(value, action) => {
                        dispatch(login(value));
                        action.resetForm();
                    }}
                >
                    <Form>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Field type="email" name="email" id="email" as={Input} variant="filled" bg={colorMode ==='dark'?"gray.300":"gray.50"}/>
                                <ErrorText component="span" name="email" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Field type="password" name="password" id="password" as={Input} variant="filled" bg={colorMode ==='dark'?"gray.300":"gray.50"} />
                                <ErrorText component="span" name="password" />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" bg={colorMode ==='dark'?"blue.600":"blue.700"} width="full">Log In</Button>
                        </VStack>
                    </Form>
                </Formik>
            </Box>
        </Flex>
    )
};