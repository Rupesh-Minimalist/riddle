import React, { useEffect } from "react";
import $ from "jquery";
import Profile from "../Profile";

const About = () => {
  useEffect(() => {
    hideText();
  }, []);
  const hideText = () => {
    $(".btn-about").hide();
    $(".image").hide();
  };
  const changeBackground = () => {
    $(".pooja").on({
      mouseenter: function () {
        $(this).css("background-color", "cyan");
        $(".description").css("background-color", "cyan");
      },

      mouseleave: function () {
        $(this).css("background-color", "#f5f5f5");
        $(".description").css("background-color", "#f5f5f5");
      },
    });
  };

  return (
    <div>
      <div onMouseOver={() => changeBackground()} className="pooja">
        <Profile />
      </div>

      <div >
        <h2>Creators</h2>
        <div class="d-flex justify-content-around">
          <div class="card " style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src="img_avatar1.png"
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
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
              src="img_avatar1.png"
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
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
              src="img_avatar1.png"
              alt="Card"
              style={{ width: "100%" }}
            />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
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
