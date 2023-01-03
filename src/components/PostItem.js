import React from "react";

const PostItem = (props) => {
  const { title, body } = props.post;
  //   console.log(title);
  //   console.log(body);
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}.</p>
      </div>
    </div>
  );
};

export default PostItem;
