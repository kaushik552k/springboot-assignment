import axios from "axios";
import React,{ useState } from "react";
import { Link } from 'react-router-dom'

function AddData() {
  const [value, setValue] = useState({ id: '', username: '', email: '' })
  const header = {
    'Access-Control-Allow-Origin': '*'
  }
  const AddDetails = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/add', value, header)
      .then(res => {
        if (res.status === 200) {
          alert('Details Added Successfully')
        }
        else {
          alert('Something went wrong')
        }
      }).catch(err => {
        console.log(err);
      })
  }
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
      <div >
        <form onSubmit={AddDetails} className="form-box">
          <br /><h2>Add Data</h2><br />
          <div className="form-group row">
            <h4 className="col-sm-2 col-form-label">Id</h4>
            <div className="col-sm-10">
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => setValue({ ...value, id: e.target.value })}></input>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <h4 className="col-sm-2 col-form-label">Name</h4>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Username" onChange={(e) => setValue({ ...value, username: e.target.value })}></input>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <h4 className="col-sm-2 col-form-label">Email</h4>
            <div className="col-sm-10">
              <input type="email" className="form-control" placeholder="Email" onChange={(e) => setValue({ ...value, email: e.target.value })}></input>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-success">Add</button>
            </div>
          </div><br /><br />
        </form>
      </div>
    </div>
  );
}
export default AddData;
