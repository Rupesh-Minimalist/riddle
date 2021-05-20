import React, { useEffect } from "react";
import $ from "jquery";
import Profile from "../Profile";
import logo from '../../images/logo.png';

const About = () => {
  useEffect(() => {
    hideText();
  }, []);
  const hideText = () => {
    $(".btn-about").hide();
    $(".image").hide();
  };
  const changeBackground = () => {
    $(".bgdiff").on({
      mouseenter: function () {
        $(this).css("background-color", "#ffcccc");
        $(".description").css("background-color", "#ffcccc");
      },

      mouseleave: function () {
        $(this).css("background-color", "#f5f5f5");
        $(".description").css("background-color", "#f5f5f5");
      },
    });
  };

  return (
    <div>
      <div onMouseOver={() => changeBackground()} className="bgdiff">
        <Profile />
      </div>

      <div style ={{background : 'white'}} >
        <h2>Creators</h2>
        <div class="d-flex justify-content-around">

          <div class="card " style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src= {logo}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">Rupesh</h4>
              <p class="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="/" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
          
          <div class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={logo}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">Garima</h4>
              <p class="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="/" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>

          <div class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={logo}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">Shruti</h4>
              <p class="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="/" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>

          <div class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={logo}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">Suvarna</h4>
              <p class="card-text">
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
              <a href="/" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default About;
