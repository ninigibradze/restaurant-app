import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./../../constants";
import "./Post.css";

const initialState = {
  id: 0,
  imgUrl: "",
  title: "",
  subtitle: "",
  description: "",
  isLoading: true,
};

const Post = () => {
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState(initialState);

  const handleFindPost = () => {
    const postId = parseInt(id, 10);
    const pushedPost = data.blogPosts.find((post) => post.id === postId);
    if (pushedPost) {
      setSelectedPost({ ...pushedPost, isLoading: false });
    } else {
      <div>Page not found</div>;
    }
  };

  useEffect(() => {
    handleFindPost();
    window.scrollTo({
      top: 0,
    });
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blog`)
  };


  if (selectedPost.isLoading) {
    return (
      <>
        <Navbar />
        <p className="headtext__cormorant post_loading">Loading</p>
        <FindUs />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="post_main-container">
        <img src={selectedPost.imgUrl} alt="postImage" />
        <div className="post_inner-div">
          <p className="p__opensans">Posted by: admin | 1 SEP 2023</p>
          <p className="headtext__cormorant post_title">{selectedPost.title}</p>
          <p className="p__opensans">{selectedPost.description}</p>
          <p className="post_more" onClick={() => handleNavigate()}>{" << "}Back</p>
        </div>
      </div>
      <FindUs />
      <Footer />
    </>
  );
};

export default Post;
