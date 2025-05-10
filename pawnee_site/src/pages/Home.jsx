import React from "react";
import SpotifyLogin from "../components/SpotifyLogin";

export default function Home() {
  return (
    <div>
      <div className="hp-1">
        <div class=" hp-image">
          {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVEeo_o5UeksILbHPWbRxKncolqqkRGSkWXLziaVeqw&usqp=CAU&ec=48600112" */}
          <img src="/images/cityscape.png" alt="" />
        </div>
        <div id="hp-side">
          <h3>Community Events</h3>
          <div className="side-block">
            <div className="side-img-div">
              <img
                className="side-img"
                src="/images/eagleton.png"
                alt=""
              />
            </div>
            <div className="side-text">Welcome Eagletonians</div>
          </div>
          <hr />
          <div className="side-block">
            <div className="side-img-div">
              <img className="side-img" src="/images/jjs.png" alt="" />
            </div>
            <div className="side-text">Support JJ's Diner!</div>
          </div>
          <hr />
          <div className="side-block">
            <div className="side-img-div">
              <a href="#/videodome">
                <img
                  className="side-img"
                  src="/images/videodome.png"
                  alt=""
                />
              </a>
            </div>
            <div className="side-text">
              Checkout the Video Dome for all your video favorites
            </div>
          </div>
          <hr />
          <div className="side-block">
            <div className="side-img-div">
              <img
                className="side-img"
                src="https://64.media.tumblr.com/4b07ecd44876867d9f79f217d6ac21c5/tumblr_mx2ue5X7Ie1sjs1fmo5_250.gifv"
                alt=""
              />
            </div>
            <div className="side-text">
              Winner of the H-2-Flow T-shirt, Ben Wyatt!
            </div>
          </div>
          <hr />
          <div className="side-block">
            <div className="side-img-div">
              <img
                className="side-img"
                src="/images/underConstruction.png"
                alt=""
              />
            </div>
            <div className="side-text">Check Out Local Artists on Spotify</div>
          </div>
        </div>
      </div>
      <div className="news-box">
        <div className="news-block">
          <div className="news-img-div">
            <img
              className="news-images"
              src="/images/h2flow2.png"
              alt="h2flo"
            />
          </div>
          <div className="news-text">
            H-2-Flow Program to Improve Community Dental Health"
          </div>
        </div>
        <div className="spacer"></div>
        <div className="news-block">
          <div className="news-img-div">
            <img
              className="news-images"
              src="/images/harvestFest.png"
              alt=""
            />
          </div>
          <div className="news-text">
            Annual Harvest Festival Returns with Record Attendance and Fall Fun
            for All!
          </div>
        </div>
        <div className="spacer"></div>
        <div className="news-block">
          <div className="news-img-div">
            <img
              className="news-images"
              src="/images/lot48.png"
              alt=""
            />
          </div>
          <div className="news-text">
            Lot 48 to be Transformed into a New Park - Exciting Plans Unveiled!
          </div>
        </div>
        <div className="spacer"></div>
        <div className="news-block">
          <div className="news-img-div">
            <img
              className="news-images"
              src="/images/dexhart.png"
              alt=""
            />
          </div>
          <div className="news-text">
            Councilman Dexhart Embroiled in New Scandal - Pawnee Residents Call
            for Accountability
          </div>
        </div>
      </div>
    </div>
  );
}
