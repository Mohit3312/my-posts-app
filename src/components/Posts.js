import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostSlice";
import PostItem from "./PostItem";

const Posts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {data.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
