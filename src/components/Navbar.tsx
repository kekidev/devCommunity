import { Spacer } from "@chakra-ui/layout";
import { Flex, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <Flex>
        {/* <Heading ml={4} mt={4} onClick={() => router.push("/")} as="button">
          RBLXGAL
        </Heading> */}
        <Spacer />
        <Sidebar />
      </Flex>
    </>
  );
}
