import React from "react";
import { ImProfile } from "react-icons/im";

export default function ListItem() {
  return (
    <div className="list__item">
      <div className="list__profile-img">
        <ImProfile />
      </div>
      <div className="list__detail-wrapper">
        <div className="font-[700] mb-[5px]">John Doe</div>
        <div>09055265853</div>
      </div>
    </div>
  );
}
