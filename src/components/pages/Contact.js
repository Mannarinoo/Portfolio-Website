  
import React from 'react';
import '../../App.css';
import axios from 'axios'
import Navbar from '../Navbar';
import '../Navbar.css'

class Contact extends React.Component {

  ResetPassword = () => {
    if (document.getElementById("name").value !== "" && document.getElementById("email").value !== "" && document.getElementById("message").value !== ""){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        alert("Email Sending is unavailable at this time. We are working on getting it set up with firebase.")
        axios.get("http://localhost:8000/send?name=" + name + "&email=" + email + "&message=" + message);
        this.props.history.push('/');
    }
    else {
      alert("Please Fill Out all of the fields")
    }
}
  
  render() {
    return(
      <div>
      <Navbar></Navbar>
      <div className="contact-us">
        <div className= "form-container">
          <p className="form-header">
          Contact Me
          </p>
        <div className="group-container">
          <div className="form-group-1">
              <p htmlFor="name" className="label">Name</p>
              <p htmlFor="exampleInputEmail1" className="label">Email</p>
              <p htmlFor="message" className="label">Message</p>
          </div>
          <div className="form-group-2">
              <input type="text" className="form-control" id="name" />
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              <textarea className="message-form" rows="1" id="message" />
          </div>
          </div>
          <div className="form-btn">
          <button class='form-button' id='reset-pswd-btn' type="onClick" onClick={this.ResetPassword}>Send Email</button>
          </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Contact;