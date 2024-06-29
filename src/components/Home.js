import React, { useState, useRef } from "react";
import "./Home.css";
import logo from "../img/logo.PNG";
import search from "../img/search.PNG";
import mic from "../img/mic.png";
import video from "../img/video.PNG";
import grid from "../img/grid.PNG";
import bell from "../img/bell.PNG";
import profilePic from "../img/profile-pic.png";
import { IoReorderThreeOutline } from "react-icons/io5";

import home from "../img/home.PNG";
import explore from "../img/explore.PNG";
import subscription from "../img/subscription.PNG";
import library from "../img/library.PNG";
import history from "../img/history.PNG";
import yourVideo from "../img/your-video.PNG";
import watchLater from "../img/watch-later.PNG";
import likedVideo from "../img/liked video.PNG";
import showMore from "../img/show more.PNG";
import showArrow from "../img/show arrow.PNG";

import rArrow from "../img/rArrow.PNG";
import lArrow from "../img/lArrow.PNG";

export const Home = ({ data }) => {
 
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [isToggled, setToggled] = useState(false);

  const toggleContent = () => {
    setShowFirstContent(!showFirstContent);
    setToggled(!isToggled);
  };

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const filterOptions = [
    "all",
    "CSS",
    "web development",
    "full stack",
    "python",
    "entertainment",
    "google",
    "javascript",
    "MongoDB",
    "artificial intelligence",
    "machine learning",
    "trending",
    // Add other filter options here
  ];

  return (
    <>
      <div className="navbar">
        <div className="toggle-btn" onClick={toggleContent}>
          <IoReorderThreeOutline id="toggleBtn"/>
        </div>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={logo} className="logo" alt="Youtube Logo" />
        </a>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
            <img src={search} alt="Search Logo" />
          </button>
          <div className="search-mic">
            <img src={mic} className="icon" alt="" id="mic" />
          </div>
        </div>
        <div className="user-options">
          <img src={video} className="icon" alt="" />
          <img src={grid} className="icon" alt="" />
          <img src={bell} className="icon" alt="" />
          <div className="user-dp">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>

      {showFirstContent ? (

      <div className="side-bar-wide">
        <a href="#" className="links active">
          <img src={home} alt="" />
          home
        </a>
        <a href="#" className="links">
          <img src={explore} alt="" />
          explore
        </a>
        <a href="#" className="links">
          <img src={subscription} alt="" />
          subscriptions
        </a>

        <hr className="seperator" />

        <a
          href="#"
          className="links"
          style={{ fontSize: "1.2rem", fontWeight: "700" }}
        >
          You
          <img src={showArrow} alt="" />
        </a>
        <a href="#" className="links">
          <img src={library} alt="" />
          library
        </a>
        <a href="#" className="links">
          <img src={history} alt="" />
          history
        </a>
        <a href="#" className="links">
          <img src={yourVideo} alt="" />
          your videos
        </a>
        <a href="#" className="links">
          <img src={watchLater} alt="" />
          watch later
        </a>
        <a href="#" className="links">
          <img src={likedVideo} alt="" />
          liked videos
        </a>

        <hr className="seperator" />

        <p
          className="subscrip"
          style={{ fontSize: "1.2rem", fontWeight: "700" }}
        >
          Subscriptions
        </p>
        <a href="#" className="links">
          <img src={library} alt="" />
          library
        </a>
        <a href="#" className="links">
          <img src={history} alt="" />
          history
        </a>
        <a href="#" className="links">
          <img src={yourVideo} alt="" />
          your videos
        </a>
        <a href="#" className="links">
          <img src={watchLater} alt="" />
          watch later
        </a>
        <a href="#" className="links">
          <img src={likedVideo} alt="" />
          liked videos
        </a>
        <a href="#" className="links">
          <img src={showMore} alt="" />
          show more
        </a>

        <hr className="seperator" />

        <p
          className="subscrip"
          style={{ fontSize: "1.2rem", fontWeight: "700" }}
        >
          Explore
        </p>
        <a href="#" className="links">
          <img src={library} alt="" />
          trending
        </a>
        <a href="#" className="links">
          <img src={history} alt="" />
          shopping
        </a>
        <a href="#" className="links">
          <img src={yourVideo} alt="" />
          music
        </a>
        <a href="#" className="links">
          <img src={watchLater} alt="" />
          movies
        </a>
        <a href="#" className="links">
          <img src={likedVideo} alt="" />
          live
        </a>
        <a href="#" className="links">
          <img src={library} alt="" />
          gaming
        </a>
        <a href="#" className="links">
          <img src={history} alt="" />
          news
        </a>
        <a href="#" className="links">
          <img src={yourVideo} alt="" />
          sports
        </a>
        <a href="#" className="links">
          <img src={watchLater} alt="" />
          courses
        </a>
        <a href="#" className="links">
          <img src={likedVideo} alt="" />
          podcasts
        </a>
        <a href="#" className="links">
          <img src={showMore} alt="" />
          show more
        </a>

        <hr className="seperator" />

        <a href="#" className="links">
          <img src={library} alt="" />
          settings
        </a>
        <a href="#" className="links">
          <img src={history} alt="" />
          report history
        </a>
        <a href="#" className="links">
          <img src={yourVideo} alt="" />
          help
        </a>
        <a href="#" className="links">
          <img src={watchLater} alt="" />
          send feedback
        </a>
      </div>

) : (
      <div className="side-bar-small">

        <a href="#" className="side-links">
          <img src={home} alt="" />
          <span>home</span>
        </a>
        <a href="#" className="side-links">
          <img src={explore} alt="" />
          <span>explore</span>
        </a>
        <a href="#" className="side-links">
          <img src={subscription} alt="" />
          <span>subscriptions</span>
        </a>
        <a href="#" className="side-links">
          <img src={library} alt="" />
          <span>library</span>
        </a>

      </div>

)}

      <div className={isToggled ? 'filters-wide' : 'filters'}>
        <button className="arrow" onClick={scrollLeft}>
          <img src={lArrow} alt="" />
        </button>

        <div className="filter-opts" ref={scrollContainer}>
          
          <div className="filter-options-container">
            {filterOptions.map((option) => (
              <button
                key={option}
                className={`filter-options ${
                  activeButton === option ? "active" : ""
                }`}
                onClick={() => handleButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>

        </div>

        <button className="arrow" onClick={scrollRight}>
          <img src={rArrow} alt="" />
        </button>
      </div>

      <div className={isToggled ? 'video-container video-container-wide' : 'video-container video-container-small'}>
        {data.map((data) => (
          <div className="videoDiv">
            <iframe
              src={data.vidLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={isToggled ? 'video-wide' : 'video'}
            ></iframe>
            <div className="content">
              <a href={data.siteLink} target="_blank"><img src={data.dp} className="channel-icon" alt="" /></a>
              <div className="info">
                <a href={data.vidLink} target="_blank">
                  <h4 className="title">{data.title}</h4>
                </a>
                <a href={data.siteLink} target="_blank">
                  <p className="channel-name">{data.site}</p>
                </a>
                <p className="viewsAndUptime">
                  {data.views} <b>.</b> {data.uptime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
