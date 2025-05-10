import React, { useEffect, useState } from "react";
import { deleteWorkOrder, getQuote, getTasks } from "../utilities";
import axios from "axios";

//https://i.kym-cdn.com/entries/icons/facebook/000/023/463/6360103332924270401274957217_Ron.jpg"

export default function Department() {
  const [quote, setQuote] = useState("");
  const [items, setItems] = useState([]);
  const [workOrderID, setWorkOrderID] = useState("");

  const handleClick = async () => {
    const response = await getQuote();
    setQuote(response.data[0]);
  };

  const handleDelete = async (id) => {
    // e.preventDefault();
    await deleteWorkOrder(id);
    setWorkOrderID("");
    location.reload();
    fetchItems();
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get("/workorders/");
      setItems(response.data.work_orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="department-pg">
      <div className="dept-img-div">
        <img className="dept-img" src="/images/prdept.jpeg" alt="" />
      </div>
      {/* This guy should be on the top */}
      <div className="swanson-quote">
        <div className="profile-div">
          <img
            id="swanson-profile"
            // "https://i.kym-cdn.com/entries/icons/facebook/000/023/463/6360103332924270401274957217_Ron.jpg"
            src="/images/swanson.png"
            alt="photo-swanson"
            onClick={handleClick}
          />
          <span>Ron Swanson</span>
          <span id="title">- Department Director</span>
        </div>

        <div>{quote}</div>
      </div>
      <div className="department-info">
        {/* These guys should be side by side */}
        <div id="work-orders">
          <h4>Currently in Work</h4>
          <hr />
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  #{item.id} <b>{item.title}</b>
                </li>
              ))}
            </ul>
          </div>
          <form
            id="delete-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleDelete(workOrderID);
            }}
          >
            <p>
              See something already completed? <br /> Help us stay updated
            </p>
            <input
              type="text"
              placeholder="Work Order ID: "
              value={workOrderID}
              onChange={(e) => setWorkOrderID(e.target.value)}
            />
            <input type="submit" value="Delete" />
          </form>
        </div>
        <div id="about">
          <p>
            Welcome to the Parks and Recreation Department!
            <br /> <br />
            As the Deputy Director of the Parks and Recreation Department, I am
            proud to lead a team of dedicated and passionate individuals who
            work tirelessly to make our town a better place to live, work, and
            play. Our department is responsible for maintaining and improving
            the many parks, trails, and recreational facilities throughout
            Pawnee, as well as organizing and hosting a variety of community
            events and programs.
            <br /> <br />
            We believe that parks and recreation are essential to the health and
            well-being of our community, and we are committed to providing
            high-quality, accessible, and inclusive services to all of our
            residents. Whether you're looking to take a leisurely walk in the
            park, play a game of pickup basketball with friends, or attend one
            of our many festivals or concerts, we have something for everyone.
            So come on out and join us in enjoying all that Pawnee's great
            outdoors has to offer!
            <br />
            <br />
            <h4>-Leslie Knope Deputy Director</h4>
          </p>
        </div>
      </div>
    </div>
  );
}
