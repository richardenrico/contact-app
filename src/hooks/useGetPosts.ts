import React, { useEffect, useState } from "react";

export default function useGetPosts(jumlahYangDiinginkan: number) {
  const [listPostingan, setListPostingan] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setListPostingan(posts);
      });
  }, []);

  return listPostingan.slice(0, jumlahYangDiinginkan);
}
