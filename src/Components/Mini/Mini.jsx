import React, {useState} from "react";
import "./Mini.css";
import user from "../Assets/person.jpg";

const Mini = () => {
  const [action, setAction] = useState("My Profile");

  return (
    <div className="main">
      <div className="cont">
        <div className="profile">
          <div className="p">
            <img src={user} alt="Profile" className="pfp" />
            <p id="name">Ankush Vaswani </p>
          </div>
          <button className="log">Log In</button>
        </div>
        <div className="greetting">
          {/* <img src={user} alt="" className='pfp' /> */}
          <h3>HI Ankush Vaswani, Good Morning!</h3>
        </div>
        <div className="menu-cont">
          <div
            className={
              action === "My Profile" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("My Profile");
              }}
            >
              {" "}
              My Profile
            </button>
          </div>
          <div
            className={
              action === "Payments" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Payments");
              }}
            >
              Payments
            </button>
          </div>
          <div
            className={action === "Exams" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Exams");
              }}
            >
              Exams
            </button>
          </div>
          <div
            className={action === "Results" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Results");
              }}
            >
              {" "}
              Results
            </button>
          </div>
          <div
            className={
              action === "Academics" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Academics");
              }}
            >
              {" "}
              Academics
            </button>
          </div>
          <div
            className={action === "Events" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Events");
              }}
            >
              Events
            </button>
          </div>
          <div
            className={
              action === "Faculty Details" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Faculty Details");
              }}
            >
              {" "}
              Faculty Details
            </button>
          </div>
        </div>
        {action === "My Profile" ? (
          <div className="profile-sec">
            <div className="profile-details">
              <img src={user} alt="" />
              <h2>Name:- Ankush Vaswani </h2>
              <h3>2204030101514</h3>
              <h3>Current Semester - 3 </h3>
            </div>
            <div className="profile-h">
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
              <div className="h-">
                <img src={user} alt="" />
                <h4>Ankush Mahesh Vaswani</h4>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {action === "Payments" ? (
          <div className="payment-cont">
            <div className="amount">
              <h2>Total Outstanding Amount</h2>
              <h3>0 Rs.</h3>
              <button className="pay">Pay Now</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {/*  end of profile sec  */}
      </div>
    </div>
  );
};

export default Mini;
