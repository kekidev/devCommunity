import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Divider } from "@chakra-ui/react";
import { Center, Flex, Heading, VStack } from "@chakra-ui/layout";

import { FaInfo, FaPen, FaLayerGroup } from "react-icons/fa";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import ColorMode from "./ColorMode";
import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";

export default function Sidebar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { auth, signOut } = useAuth();

  return (
    <>
      <Tooltip label="Open menu">
        <HamburgerIcon ref={btnRef} onClick={onOpen} w={10} m={6} h={10} />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex>
                <Avatar
                  name={auth ? auth.name : null}
                  src={auth ? auth.photoUrl : null}
                />
                <Center>
                  <Heading ml={2} fontSize="x-large">
                    {auth ? auth.name : null}
                  </Heading>
                </Center>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <VStack>
                <ColorMode />
                <Divider orientation="horizontal" />
                <Button
                  leftIcon={<FaLayerGroup />}
                  width="72"
                  onClick={() => router.push("/")}
                >
                  Home
                </Button>
                <Button
                  leftIcon={<FaInfo />}
                  width="72"
                  onClick={() => router.push("/about")}
                >
                  About
                </Button>
                <Button
                  leftIcon={<FaPen />}
                  width="72"
                  onClick={() => router.push("/blog")}
                >
                  Blog
                </Button>
                <Divider orientation="horizontal" />
                {auth ? (
                  <Button width="72" onClick={() => signOut()}>
                    Logout
                  </Button>
                ) : (
                  <Button width="72" onClick={() => router.push("/login")}>
                    Login
                  </Button>
                )}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
