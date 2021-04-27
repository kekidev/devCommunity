import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../lib/auth";

function index() {
  const { auth } = useAuth();
  const router = useRouter();

  return (
    <>
      <Navbar />
    </>
  );
}

export default index;
