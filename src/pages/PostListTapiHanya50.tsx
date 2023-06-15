import React, { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";

const PostListTapiHanyaLimaPuluh = () => {
  const postingan = useGetPosts(50);

  return (
    <div>
      {postingan.map((postingan: any) => (
        <div className={`border gap-8 mb-4`}>
          <h1 className={`text-lg font-bold`}>{postingan.title}</h1>
          <p>{postingan.body}</p>
        </div>
      ))}
    </div>
  );
};
export default PostListTapiHanyaLimaPuluh;
