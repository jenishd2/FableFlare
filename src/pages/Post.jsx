import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import service from "../appwrite/config";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userdata = useSelector((state) => state.auth.userData);

  const isAuthor = post && userdata ? post.userid === userdata.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        // console.log(slug)
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletepost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImg);
        navigate("/");
      }
    });
  };

  return post ? (
    <Container classname="mx-auto !w-[80%] max-ml:!w-full overflow-y-scroll no-scrollbar ">
      <div className="w-full max-ml:h-[350px] flex justify-center h-fit items-center flex-col mb-4 relative border rounded-xl p-2">
        <img
          src={service.getFilePreview(post.featuredImg)}
          alt={post.title}
          className="rounded-xl h-[90%] w-[35%] max-ml:w-[90%]"
        />

        {isAuthor && (
          <div className="absolute ml:right-6 ml:top-6 -bottom-[3rem] ">
            <Link to={`/edit-post/${post.$id}`}>
              <Button classname="mr-3 border-2 border-black  text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300">
                Edit
              </Button>
            </Link>
            <Button
              classname="border-2 border-black  text-xl font-semibold px-2 py-1 rounded hover:shadow-3xl transition hover:ease-in-out duration-300"
              onClick={deletepost}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
      <div className="w-full mb-6 max-ml:mt-[4rem] flex gap-3 ">
        <h1 className="text-2xl font-bold text-left max-ml:text-xl">Title:</h1>
        <h1 className="text-2xl  text-left max-ml:text-xl">{post.title}</h1>
      </div>
      <h1 className="font-bold text-2xl my-3 max-ml:text-xl">Description</h1>
      <div className="browser-css text-left text-xl">
        {parse(post.content)}
      </div>
    </Container>
  ) : null;
}
