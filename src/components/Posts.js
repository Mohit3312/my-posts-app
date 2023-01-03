import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostSlice";
import PostItem from "./PostItem";

const Posts = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  console.log(searchText);
  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  const searchSubmit = () => {
    if (searchText !== "") {
      setFilteredPosts(
        data.filter((post) => {
          return post.title.includes(searchText);
        })
      );
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        name="search"
        id="search"
        value={searchText}
      />
      <button id="submit" onClick={searchSubmit}>
        Search Post
      </button>
      {searchText === ""
        ? data.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })
        : filteredPosts.length === 0
        ? "No Post with this title"
        : filteredPosts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })}
    </div>
  );
};

export default Posts;
