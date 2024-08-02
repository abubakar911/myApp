"use client";
import axios from "axios";
import useSWR from "swr";

let fetcher = (...arg) => {
  return axios.get(...arg).then((resp) => resp.data);
};

export default function hello() {
  let { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products/1",
    fetcher
  );

  return (
    <div>
      {isLoading ? <img src="https://i.gifer.com/ZKZg.gif" /> : null}

      {error ? <h1>Check your internet connection</h1> : null}

      {data ? (
        <div>
          <h1>{data.title}</h1>
          <h1>{data.price}</h1>
        </div>
      ) : null}
    </div>
  );
};
