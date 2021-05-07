import { Button } from "@chakra-ui/button";
import { Center, Flex, Heading, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About - Untitled</title>
      </Head>
      <Navbar />
      <Center h="300px">
        <VStack spacing="15px" letterSpacing="2px">
          <Heading size="2xl">안녕하세요</Heading>
          <Heading>베타버전입니다</Heading>
          <Flex>
            <Button
              leftIcon={<FaGithub />}
              onClick={() => {
                router.push("https://github.com/wevbute?tab=repositories");
              }}
            >
              Github
            </Button>
          </Flex>
        </VStack>
      </Center>
    </>
  );
}
