import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Container, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaGithub, FaStar } from "react-icons/fa";
import { getAllProjects, getProjects } from "../utils/db";
import { NextPageContext } from "next";
// TODO: obj -> fb
function blog(props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };
  const router = useRouter();
  const project = JSON.parse(props.project);

  // console.log(project[0].id);

  function PostGen(data) {
    return (
      <Box
        width="300px"
        height="380px"
        rounded="20px"
        m={3}
        overflow="hidden"
        boxShadow="xl"
        bg={bgColor[colorMode]}
      >
        <Image
          h="44"
          w="3xl"
          src={data.thumbnail}
          alt="Image is not avaliable"
        />
        <Box p={5}>
          <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
            {data.title}
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md" color="gray.500">
            {data.description}
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="lg"
            color={textColor[colorMode]}
          >
            by {data.developer}
          </Text>
          <Box textAlign="center" mt={4}>
            <Button
              leftIcon={<FaGithub />}
              onClick={() => router.push(data.github)}
            >
              Github
            </Button>
            {!!data.web ? (
              <Button
                leftIcon={<FaStar />}
                onClick={() => router.push(data.web)}
              >
                Visit
              </Button>
            ) : null}
          </Box>
        </Box>
      </Box>
    );
  }

  interface Post {
    title: string;
    thumbnail: string;
    github: string;
    web?: string;
    developer: string;
    description: string;
  }

  return (
    <>
      <Head>
        <title>Projects - Untitled</title>
      </Head>
      <Flex>
        <Spacer />
        <Navbar />
      </Flex>
      <Container maxW="6xl">
        {project.length > 0 && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {project.map((singePost) => (
              <Box key={singePost.id} textAlign="start" m={2}>
                {PostGen(singePost)}
              </Box>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const post = await getAllProjects();
  const data = post.map((singleProject: any) => {
    return {
      ...singleProject,
    };
  });
  return {
    props: {
      project: JSON.stringify(data),
    },
  };
}
export default blog;
