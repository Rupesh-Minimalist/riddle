import React, { useEffect } from "react";
import $ from "jquery";
import Profile from "../Profile";
import './styles.css';
import rupesh from '../../images/rupesh.png';
import suvarna from '../../images/suvarna.png';
import garima from '../../images/garima.png';
import shruti from '../../images/shruti.png';



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
        <h1>Creators</h1>
        <div class="d-flex justify-content-around">

          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src= {rupesh}
              alt="Card"
              style={{ width: "390px", height: "350px" , borderRadius: " 25rem" }}
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
          
          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={garima}
              alt="Card"
              style={{ width: "395px", height: "350px" , borderRadius: " 25rem" }}
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

          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={suvarna}
              alt="Card"
              style={{ width: "390px", height: "350px" , borderRadius: " 30rem"}}
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

          <div className="creator" class="card" style={{ width: "400px" }}>
            <img
              class="card-img-top"
              src={shruti}
              alt="Card"
              style={{ width: "390px", height: "350px" , borderRadius: " 30rem"}}
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

          

          
        </div>
      </div>
    </div>
  );
};

export default About;
