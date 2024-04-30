
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Update from "./Update";
import WebsiteService from "../services/WebsiteService";


function Websites () {
	
const navigate = useNavigate();
// const baseURL = "http://localhost:3000";

const [websites, setWebsites] = useState([]);

console.log(websites)

// const setYakubData = () => {
//     axios.get(baseURL + "/websites").then((response) => {
//       console.log(response.data);
//       setWebsites(response.data);
//     }).catch(error => {
//       alert("Error Ocurred while loading data:" + error);
//     });
//   }

  // useEffect(() => {
  //   setYakubData();
  // }, []);
  // const removeWebsite = (id) => {
  //   // console.log(id)
  //   axios.delete(baseURL + "/websites/" + id).then((response) => {
  //     alert("Website record " + id + " deleted!");
  //     setYakubData();
  //     navigate('/')

  //   }).catch(error => {
  //     alert("Error Ocurred in removeWebsite:" + error);
  //   });
  // }
  const setYakubData= () => {

    WebsiteService.getWebsites().then((response) => {
        setWebsites(response.data);
        console.log(response.data)
    });
};

useEffect(() => {
setYakubData();
}, []);

const removeWebsite = (id) => {
console.log(id);
WebsiteService.deleteWebsite(id).then((response) => {
  alert("Website record " + id + " deleted!");
  setWebsites();
  // navigate('/read')

}).catch(error => {
  alert("Error Ocurred in removing Website:" + error);
});
}




	return(

     <div>
		<h2>Website List</h2>
		<br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/POWER")}>
          Create New Website
        </button>
      </nav>

	  <br></br>
      <div className="col-md-6">
        <h4>Websites List</h4>

        <div className="tablecontainer">
        
            <div class="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>BikeName</th>
                    <th>Model</th>
                    <th>Place</th>
                    <th>number</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

				{
                    websites &&
                    websites.map((website, index) => (

                   

                      <tr>
                        <th scope="row">{website.id}</th>
                        <td>{website.name}</td>
                        <td>{website.url}</td>
                        <td>{website.Place}</td>
                        <td>{website.number}</td>


                        <td >

                          {/* <Link to={"/edit/" + website.id}>                          </Link> */}
                          <button
                             onClick={() => navigate("/edit/" + website.id)} className="btn btn-success"
                          > Edit
                          </button>

                          <button
                            onClick={() => removeWebsite(website.id)} className="btn btn-danger"
                          > Delete
                          </button>

                        </td>
                      </tr>
// onClick={() => removeWebsite(website.id)} className="btn btn-danger"
                   
))
} 

                </tbody>
              </table>
            </div>
          </div>
      
       
      </div>

		
	</div>
    );
}
export default Websites;

