import { Box, Button, Flex, FormControl, FormLabel, VStack, Input, useColorMode } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { ErrorText } from "./styled/styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .required('Required'),
        password: Yup.string()
            .min(7, 'Too Short!')
            .required('Required'),
    });
    return (
        <Flex bg={colorMode ==='dark'?"gray.600":"gray.200"} align="center" justify="center" h="100vh">
            <Box bg={colorMode ==='dark'?"gray.400":"gray.100"} p={6} rounded="md" >
                <Formik
                    initialValues={
                        {
                            name: '',
                            email: '',
                            password: '',
                        }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={(value, action) => {
                        dispatch(register(value));
                        action.resetForm();
                    }}
                >
                    <Form>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="name" >Name</FormLabel>
                                <Field type="text" name="name" id="name" as={Input} variant="filled" bg={colorMode ==='dark'?"gray.300":"gray.50"}/>
                                <ErrorText component="span" name="name" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Field type="email" name="email" id="email" as={Input} variant="filled" bg={colorMode ==='dark'?"gray.300":"gray.50"}/>
                                <ErrorText component="span" name="email" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Field type="password" name="password" id="password" as={Input} variant="filled" bg={colorMode ==='dark'?"gray.300":"gray.50"}/>
                                <ErrorText component="span" name="password" />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" bg={colorMode ==='dark'?"blue.600":"blue.700"} width="full">Register</Button>
                        </VStack>
                    </Form>
                </Formik>
            </Box>
        </Flex>
    )
};