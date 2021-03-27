
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Doclist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`, {}).then(res => {
      var resdata = res.data;
      // console.log(resdata)
      setData(resdata);
    });
  },[]);

  // saving value to state

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>body</th>
              <th colSpan="2">action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
               <Link to={"/edit/" + item.id} className="btn btn-success">
              Edit
            </Link>
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Doclist;
