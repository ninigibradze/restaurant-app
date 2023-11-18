import React from "react";
import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import { data } from "./../../constants";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/restaurant-app/blog/${id}`)
  };

  return (
    <>
      <Navbar />
      <div className="blog_main-container">
        <div className="blog_inner-container">
          {data.blogPosts.map((post, index) => {
            return (
              <div key={post.title + index} className="blog_post-div">
                <img src={post.imgUrl} alt="blogimg"  onClick={() => handleNavigate(post.id)} />
                <p className="p__opensans blog_toplayer-p">1 SEP</p>
                <div className="blog_info-p">
                  <p className="p__opensans">admin</p>
                  <p className="blog_title">{post.title}</p>
                  <p className="p__opensans">{post.subtitle}</p>
                  <p className="blog_more" onClick={() => handleNavigate(post.id)}>Read More</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FindUs />
      <Footer />
    </>
  );
};

export default Blog;
