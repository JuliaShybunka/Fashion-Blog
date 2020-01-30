import React, { useState } from "react";
import "./blogForm.css";

const BlogForm = props => {
  const [name, setName] = useState("Fibi");
  return (
    <div className="blog">
      <div className="blog__container">
        {/* <img src={} /> */}
        <div className="blog__form">
          <div className="blog__form-suptitle">Suptitle</div>
          <div className="blog__form-title">Title</div>
          <div className="blog__form__info">
            <div className="blog__form-data">Data</div>
            <div className="blog__form-name">
              <span>By </span>
              {name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
