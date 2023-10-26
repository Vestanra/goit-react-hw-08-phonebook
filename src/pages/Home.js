import { Flex, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "redux/auth/authSelectors";

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    return (<Flex  direction="column" alignItems="center" >
        {isLoggedIn ?
            <Heading as="h1" fontSize='2xl' mt={40}>{`${user.name}, enjoy using the phonebook :)`}</Heading> :
            <Heading as="h1" fontSize='2xl' mt={40}>To use the phonebook, please log in</Heading>}
        <Image src="https://static.wixstatic.com/media/60c27b_2b794936a1314919bc7a247a828f03ac.png/v1/fill/w_227,h_177,al_c,q_85,enc_auto/60c27b_2b794936a1314919bc7a247a828f03ac.png"
            boxSize='200px' objectFit='cover' alt="cat" mt={8} />
    </Flex>)
};

export default Home;