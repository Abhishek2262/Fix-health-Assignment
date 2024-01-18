import React from "react";
import "../Style/Show.css";
import { GoPeople } from "react-icons/go";
import { GrEmoji } from "react-icons/gr";
import { BsCalendar4 } from "react-icons/bs";
function Show() {
  return (
    <div className="shw-cnt">
      <h1>Patient Recovery Stories</h1>
      <h3>Don't just take our word for it</h3>
      <div className="rcrd-cnt">
        <div className="box-1">
          <div className="show-icon-cntr"><GoPeople/></div>
          <div>2000+</div>
        </div>{" "}
        <div className="line-cnt"></div>
        <div className="box-1">
          <div className="show-icon-cntr"><BsCalendar4/></div>
          <div>1 Lakh+</div>
        </div>
        <div className="line-cnt"></div>
        <div className="box-1">
          <div className="show-icon-cntr"><GrEmoji/></div>
          <div>9.6/10</div>
        </div>
      </div>
    </div>
  );
}

export default Show;
