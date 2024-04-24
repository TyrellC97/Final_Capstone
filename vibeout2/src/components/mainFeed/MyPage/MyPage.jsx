import React, { useEffect, useState } from "react";
import "./myPage.css";
import axios from "axios";
import me from "../../../assets/Me.jpg";
import UpdatePost from "../../updatePost/UpdatePost";

function MyPage() {
  const [user, setUser] = useState("Tyrell");
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([{}]);
  const [postEdit, setPostEdit] = useState("")

  const url = "https://final-capstone-c8y0.onrender.com/posts/";


  // API
  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch(url);
      const myPosts = await result.json();
      setPosts(myPosts);
    };
    getPosts();;
  }, [posts]);

  //  CREATE
  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://final-capstone-c8y0.onrender.com/posts/", {
        postBody,
      });
      
    } catch (e) {
      console.log(e);

    }
  };

  // delete
  const deletePost = async (_id) => {
    try {
      await axios.delete("https://final-capstone-c8y0.onrender.com/posts/"+_id)
      alert("Are you sure you want to delete this post?") 


    } catch (error) {res.json({ message: error.message })}
  };



  return (
    <>
      <div className="prof-page">
        <h4>{user}'s Profile</h4>
        <hr />
        <div className="upload">
          <form action="Post">
            <input
              type="text"
              onChange={(e) => {
                setPostBody(e.target.value);
              }}
              placeholder="Say Something"
            />
            <button onClick={submit}>Post</button>
            <br />
            <input type="file" className="file" />
          </form>
        </div>
        <div className="timeline">




          <h4> MY Timeline</h4>
          {
            posts.map((post, i) => {
            return (
              <div key={i} className="contentcard">
                <img src={me} alt="" className="content-img" />
                <div className="content-text">
                  <a href="">
                    <h5>{user}</h5>
                  </a>
                  <p>{post.postBody}</p>
                  <button className="delete" onClick={(e) => {deletePost(post._id)} }>Delete Post</button>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </>
  );
}

export default MyPage;
