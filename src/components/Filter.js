import { Box, FormLabel, Input, useColorMode } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    return (<Box mb={6} mt={6} w={500}>
        <FormLabel htmlFor="contact" fontSize='xl'>Find contacts by name</FormLabel>
        <Input type="text" name="contact" id="contact" variant="filled"  bg={colorMode === 'dark' ? "gray.300" : "gray.50"}
            onChange={(evt) => dispatch(changeFilter(evt.target.value))}></Input>
    </Box>
    );
};
