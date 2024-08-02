"use client";
import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "./box.css";

export default function box() {

  let [boxes, setBoxes] = useState([{ color: "red" }, { color: "blue" }]);
  
  useEffect(
    function () {
      $(".box").draggable();
    },
    [boxes]
  );

  return (
    <div>
        
      {boxes.map(function (box) {
        return (
          <div style={{ backgroundColor: box.color }} className="box"></div>
        );
      })}

      <button
        onClick={() => {
          let color = prompt("give a color");
          let obj = { color };
          boxes.push(obj);
          setBoxes([...boxes]);
        }}
      >
        add boxes
      </button>

    </div>
  );
};
