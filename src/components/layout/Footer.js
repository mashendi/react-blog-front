import React from "react";
import {AiFillHeart} from "react-icons/ai";

function Footer() {
  return (
    <footer className="text-muted mt-5 mb-5 w-100 text-center">
      This Blog made by <a href="http://www.linkedin.com/in/mashendi">@mashendi</a>{" "}
      with <AiFillHeart style={{color: "red"}} />
    </footer>
  );
}

export default Footer;
