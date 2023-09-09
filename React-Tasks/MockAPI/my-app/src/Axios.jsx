import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [userData, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h3>Axios React</h3>
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>street</th>
          <th>zipcode</th>
          <th>lat</th>
          <th>lng</th>
        </tr>
        <tr>
          <td>
            {userData.map((data) => {
              return <div>{data.name}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.username}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.email}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.address.street}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.address.zipcode}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.address.geo.lat}</div>;
            })}
          </td>
          <td>
            {userData.map((data) => {
              return <div>{data.address.geo.lng}</div>;
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Axios;
