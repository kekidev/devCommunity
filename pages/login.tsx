import {
  Button,
  Center,
  Container,
  Heading,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";
import { useAuth } from "../lib/auth";

const signin = () => {
  const { auth, siginWithGoogle } = useAuth();
  const router = useRouter();

  if (auth) {
    router.push((router.query.next as string) || "/");
  }

  const toast = useToast();

  return (
    <>
      <Head>
        <title>Login - Untitled</title>
      </Head>
      <Navbar />
      <Container>
        <Center mt={10}>
          <VStack spacing="4">
            <Heading fontSize="3xl" mb={2}>
              Sign in with other services
            </Heading>
            <Button
              width="72"
              leftIcon={<FcGoogle />}
              onClick={() =>
                siginWithGoogle().then(() =>
                  toast({
                    title: "Success!",
                    description: "Successfully Signed in",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  })
                )
              }
            >
              Sign in with google
            </Button>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default signin;
