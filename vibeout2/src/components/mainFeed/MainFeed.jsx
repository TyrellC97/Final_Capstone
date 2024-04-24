import React, { useEffect, useState } from "react";
import "./mainfeed.css";
import kdot from "../../assets/kdot.jpg";
import jcole from "../../assets/jcole.jpg";
import drake from "../../assets/drake.jpg";
import future from "../../assets/future.jpg";

function MainFeed() {
  const [posts, setPosts] = useState("");

  const url = "http://localhost:3000/following";

  useEffect(() => {
    const getAccounts = async () => {
      const result = await fetch(url);
      const artists = await result.json();
      setPosts(artists);
      console.log(artists);
    };

    getAccounts();
  }, []);

  return (
    <>
      <div className="feed">
        <h3 className="latest">Latest</h3>
        <hr />
        <div className="feed-body">
        <div className="contentcard">
          <img src={kdot} alt="" className="content-img" />
          <div className="content-text">
            <a href="">
              <h5>Kendrick</h5>
            </a>
            <p>I really dont like aubrey</p>
          </div>
        </div>
        <div className="contentcard">
          <img src={jcole} alt="" className="content-img" />
          <div className="content-text">
            <a href="">
              <h5>J Cole</h5>
            </a>
            <p>Im Sorry Yall</p>
          </div>
        </div>
        <div className="contentcard">
          <img src={future} alt="" className="content-img" />
          <div className="content-text">
            <a href="">
              <h5>Future</h5>
            </a>
            <p>We Dont Trust You</p>
          </div>
        </div>
        <div className="contentcard">
          <img src={drake} alt="" className="content-img" />
          <div className="content-text">
            <a href="">
              <h5>Drake</h5>
            </a>
            <p>Kendrick is short</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default MainFeed;
