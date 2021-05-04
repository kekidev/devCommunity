import { Button } from "@chakra-ui/button";
import { Center, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
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
          <Heading>이 웹을 개발한 중학교 3학년입니다</Heading>
          <Heading>별 건 없지만 이 웹은 베타버전입니다</Heading>
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
