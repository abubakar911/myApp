"use client";
import customer from "@/apis/customer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function hello() {
  let [customar, setCustomer] = useState([]);

  useEffect(() => {
    customer.getCustomers().then((resp) => {
      console.log(resp.data);
      setCustomer(resp.data);
    });
  }, []);

  function addCustomer() {
    customer
      .addCustomer({
        customer_b_name: "AB",
        customer_f_name: "abubakar",
        customer_d_address: "khalidabad",
      })
      .then((resp) => {
        console.log(resp.data);
        toast.success("customer add hogya");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div>

<table border={1}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Open Balance</th>
          </tr>
        </thead>

        {customar.map(function (customer) {
          return (
            <tr>
              <td>{customer.customer_f_name}</td>
              <td>{customer.customer_b_name}</td>
            </tr>
          );
        })}
      </table>

      <button onClick={addCustomer}>Add Customer</button>
    </div>
  );
};
