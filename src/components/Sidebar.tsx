import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, Divider } from "@chakra-ui/react";
import { Center, Flex, Heading, VStack } from "@chakra-ui/layout";

import {FaInfo, FaPen, FaLayerGroup, FaRProject, FaStar} from "react-icons/fa";

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
      <Tooltip label="메뉴 열기">
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
                <Button
                  leftIcon={<FaStar />}
                  width="72"
                  onClick={() => router.push("/projects")}
                >Projects</Button>
                <Divider orientation="horizontal" />
                {auth ? (
                  <Button width="72" onClick={() => signOut()}>
                    로그아웃
                  </Button>
                ) : (
                  <Button width="72" onClick={() => router.push("/login")}>
                    로그인
                  </Button>
                )}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                닫기
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
