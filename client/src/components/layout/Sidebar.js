import React from "react";
import "../../styles/styles.css";
import Form from "../forms/Form";
const Sidebar = () => {
  return (
    <div>
      <div class="welcome-container">
        <h1>Welcome, Mentor of Students!</h1>
        <p>
          We're excited to have you on board to guide and support our students
          on their educational journey.
        </p>
      </div>

      <div className="main-container">
        <h3 style={{textAlign:'center'}}>Evaluate Students</h3>
        <Form/>
      </div>
    </div>
  );
};

export default Sidebar;
