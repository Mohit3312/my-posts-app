import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/PostSlice";
import PostItem from "./PostItem";

const Posts = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState(data);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setFilteredPosts(data);
  }, [data]);

  const searchSubmit = () => {
    if (searchText !== "") {
      setFilteredPosts(
        data.filter((post) => {
          return post.title.includes(searchText);
        })
      );
    } else {
      setFilteredPosts(data);
    }
  };
  return (
    <div>
      <div className="text-center my-4">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          name="search"
          id="search"
          value={searchText}
          className="me-3"
        />
        <button
          className="btn btn-sm btn-primary"
          id="submit"
          onClick={searchSubmit}
        >
          Search Post
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {status === "loading"
          ? "Posts are loading"
          : filteredPosts.length !== 0
          ? filteredPosts.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })
          : "No post with this title"}
      </div>
    </div>
  );
};

export default Posts;
