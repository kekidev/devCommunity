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
              다른 플랫폼으로 로그인해보세요
            </Heading>
            <Heading fontSize="xl" m={2}>
              호스팅 사이트 문제로 현재 로그인이 되지 않습니다
            </Heading>
            <Button
              width="72"
              leftIcon={<FcGoogle />}
              disabled={true}
              onClick={() =>
                siginWithGoogle().then(() =>
                  toast({
                    title: "성공",
                    description: "성공적으로 로그인하였습니다",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  })
                )
              }
            >
              구글로 로그인
            </Button>
          </VStack>
        </Center>
      </Container>
    </>
  );
};

export default signin;
