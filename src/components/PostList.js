import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { PaginationButtonsList } from "./PaginationButtonsList";
import { Post } from "./Post";

const PostList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=5`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
          setIsLoading(false);
        });
  }, [pageNumber]);
  return (
    <>
      <PaginationButtonsList
        actPage={pageNumber}
        setActivePage={setPageNumber}
      />
      {isLoading && <Loader />}
      {!isLoading &&
        posts.map((post) => {
          return <Post title={post.title} body={post.body} key={post.title} />;
        })}
    </>
  );
};

export { PostList };
