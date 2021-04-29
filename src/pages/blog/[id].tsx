import { NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import { getPost } from "../../utils/db";

function Post(props) {
  const post = JSON.parse(props.post);

  return (
    <>
      <Head>
        <title>{post.title} - Untitled</title>
      </Head>
      <Navbar />
      <h1>title - {post.title}</h1>
      <h2>author - {post.author}</h2>
      <p>content - {post.content}</p>
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
