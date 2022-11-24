import axios from "axios";
import React,{ useState,useEffect } from "react";
import { Link } from 'react-router-dom'

function Fetchdata() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/fetchdata")
      .then((res) => {
        setDetails(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <b><Link to='/' className="nav-link">Add Data</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to='/fetchdata' className="nav-link">Fetch Data</Link></b>
            </li>
          </ul>
        </div>
      </nav>
      <br /><br /><br />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {
            details.map(detail => {
              return (
                <tbody key={detail.id}>
                  <tr >
                    <th scope="row">{detail.id}</th>
                    <td>{detail.username}</td>
                    <td>{detail.email}</td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Fetchdata;
