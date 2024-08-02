"use client";
import "./home.css";
import { useEffect, useRef, useState } from "react";
import Card from "@/components/card/card";
import axios from "axios";

export default function Home() {
  let [ads, setAds] = useState([]);

  useEffect(function () {
    async function loadAds() {
      let resp = await axios.get("https://fakestoreapi.com/products");
      console.log(resp.data);
      setAds(resp.data);
    }

    loadAds();
  }, []);

  return (
    <div>
      <div id="adsContainer">
        {ads.map((ad) => {
          return <Card abc={ad}></Card>;
        })}
      </div>
    </div>
  );
};
