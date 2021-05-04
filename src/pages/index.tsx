import { Center, Flex, Heading, VStack } from "@chakra-ui/layout";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { MdCheck } from "react-icons/md";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Untitled</title>
      </Head>
      <Navbar />
      <Center h="full">
        <VStack>
          <Heading>TODO</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheck} color="green.500" />
              Firebase auth
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} color="green.500" />
              Blog post
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} color="green.500" />
              Color Mode
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Homepage
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Vercel login issue
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Responsive design
            </ListItem>
            <ListItem>
              <ListIcon color="green.500" />
              Data loading
            </ListItem>
          </List>
        </VStack>
      </Center>
    </>
  );
}
