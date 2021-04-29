import { NextPageContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import { getPost } from "../../utils/db";

function Post(props) {
  const post = JSON.parse(props.post);

  return (
    <>
      <Navbar />
      <h1>{post.title}</h1>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const id = context.query.id;
  const postData = await getPost(id);
  return {
    props: {
      post: postData,
    },
  };
}

export default Post;
