import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = props => {
  const baseURL = "http://localhost:3000";
  const navigate = useNavigate();
  const { id } = useParams();
  // const [websitesData, setnewWebsiteData] = useState([]);
  const [currentWebsiteName, setCurrentWebsiteName] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentPlace, setCurrentPlace] = useState('');
    const [currentnumber, setCurrentnumber] = useState('');




  // fetch or retrieve
  const getWebsiteData = () => {
    axios.get(baseURL + "/websites/" + id)

      .then((response) => {
        const setCurrentWebsiteData = response.data;

        setCurrentWebsiteName(setCurrentWebsiteData.name);
        setCurrentUrl(setCurrentWebsiteData.url);
        setCurrentPlace(setCurrentWebsiteData.Place);
        setCurrentnumber(setCurrentWebsiteData.number);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });

  }

  // update
  const submitActionHandler = (event) => {

    event.preventDefault();
    axios.put(baseURL + "/websites/" + id, {
        name: currentWebsiteName,
        url: currentUrl,
        Place: currentPlace,
        number: currentnumber
    })

      .then((response) => {
        alert("Website Updated!");
        navigate("/");
      }).catch(error => {
        alert("error===" + error);
      });


  };

  useEffect(() => {
    if (id)
      getWebsiteData(id);
  }, [id]);

  const websitenameChangeHandler = (event) => {
    setCurrentWebsiteName(event.target.value);
  };

  const urlChangeHandler = (event) => {
    setCurrentUrl(event.target.value);
  };
  const PlaceChangeHandler = (event) => {
    setCurrentPlace(event.target.value);
  }; 
  const numberChangeHandler = (event) => {
    setCurrentnumber(event.target.value);
  };
  return (
    <div className="container">

      <div className="row">
        <h1>Update a Website</h1>

        <div className="card-body">
          <form onSubmit={submitActionHandler} >
            <div className="form-group">
              <label> Bike Name: </label>
              <input placeholder="First Name" name="firstName" className="form-control"
                value={currentWebsiteName} onChange={websitenameChangeHandler} />
            </div>
            <div className="form-group">
              <label> Model: </label>
              <input placeholder="Last Name" name="lastName" className="form-control"
                value={currentUrl} onChange={urlChangeHandler} />
            </div>
            <div className="form-group">
              <label> Place: </label>
              <input placeholder="Last Name" name="lastName" className="form-control"
                value={currentPlace} onChange={PlaceChangeHandler} />
            </div>
            <div className="form-group">
              <label> Phnumber: </label>
              <input placeholder="Last Name" name="lastName" className="form-control"
                value={currentnumber} onChange={numberChangeHandler} />
            </div>


            <button className="btn btn-success" >Update</button>
            <button className="btn btn-danger" onClick="{cancelHandler}" style={{ marginLeft: "10px" }}>Cancel</button>
          </form>

        </div>
      </div>
    </div>
  );
}
export default Update;