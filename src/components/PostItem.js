import React from "react";

const PostItem = (props) => {
  const { title, body } = props.post;
  //   console.log(title);
  //   console.log(body);
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostItem;
