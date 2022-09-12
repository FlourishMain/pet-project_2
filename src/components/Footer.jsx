import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ footerType }) {
  return (
    <>
      {footerType === 0 ? (
        <div className="footer">
          <button className="btn bg-blue-400">
            <Link to="/add">Add</Link>
          </button>
          <button className="btn bg-green-400">Share</button>
          <button className="btn bg-red-400">Delete</button>
        </div>
      ) : (
        <div className="footer">
          <button className="btn bg-red-400 w-full">
            <Link to="/">Cancel</Link>
          </button>
          <button className="btn bg-green-400 w-full">Send</button>
        </div>
      )}
    </>
  );
}
