import React, { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";

function PostListPage() {
  const listPostingan = useGetPosts(100);

  return (
    <div className={`mt-5`}>
      TodoListPage
      {listPostingan.map((postingan: any) => (
        <div className={`border gap-8 mb-4`}>
          <h1 className={`text-lg font-bold`}>{postingan.title}</h1>
          <p>{postingan.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostListPage;
