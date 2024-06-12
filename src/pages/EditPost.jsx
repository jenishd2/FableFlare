import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
export default function EditPost() {
  const [post, setpost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setpost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);
  return post ? (
    <Container classname="!w-[90%] mx-auto max-ml:h-fit">
      <PostForm post={post} />
    </Container>
  ) : null;
}
