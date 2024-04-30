import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import WebsiteService from '../services/WebsiteService';


const POWER = () => {
   
    const navigate = useNavigate();

    
    const [enteredWebsiteName, setWebsiteName] = useState('');
    const [enteredUrl, setUrl] = useState('');
    const [enteredPlace, setPlace] = useState('');
    const [enterednumber, setnumber] = useState('');


    const websitenameChangeHandler = (event) => {
        setWebsiteName(event.target.value);
    };

    const urlChangeHandler = (event) => {
        setUrl(event.target.value);
    };
    const PlaceChangeHandler = (event) => {
        setPlace(event.target.value);
    };
    const numberChangeHandler = (event) => {
        setnumber(event.target.value);
    };

    // const submitActionHandler = (event) => {
    //     console.log(enteredWebsiteName, enteredUrl, enteredPlace, enterednumber)
    //     event.preventDefault();
    //     // post
    //     axios.post(baseURL, {
    //         name: enteredWebsiteName,
    //         url: enteredUrl,
    //         Place: enteredPlace,
    //         number: enterednumber
    //     })
    //         .then((response) => {
    //             alert("Website " + enteredUrl + " added!");
    //             navigate("/");
    //         }).catch(error => {
    //             alert("error===" + error);
    //         });
        

    // };
    const submitActionHandler = (event) => {
    	event.preventDefault();

        WebsiteService.createWebsite({name:enteredWebsiteName, url:enteredUrl,place:enteredPlace,number:enterednumber}).then((response) => {
             alert("Website " + ":" +enteredWebsiteName+ ":"+ enteredUrl +" added!");
             console.log(response)
        		navigate("/");
      }).catch(error => {
          alert("error===" + error);
      });
    };

  const cancelHandler = () =>{
    //reset the values of input fields
    setWebsiteName('');
    setUrl('');
    setPlace('');
    setnumber('');
    navigate("/");

  }




    return(
        <div className="container">
            <div className="row">
                <h1>Add a Website</h1>

                <div className="card-body">
                <form onSubmit={submitActionHandler}>
                        <div className="form-group">
                            <label> Bike Name: </label>
                            <input placeholder="Bike Name" name="firstName" className="form-control"
                                value={enteredWebsiteName} onChange={websitenameChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label> Model: </label>
                            <input placeholder="Model" name="lastName" className="form-control"
                               value={enteredUrl} onChange={urlChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Place: </label>
                            <input placeholder="Place" name="Place" className="form-control"
                                value={enteredPlace} onChange={PlaceChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <label> Phnumber: </label>
                            <input placeholder="number" name="number" className="form-control"
                                value={enterednumber} onChange={numberChangeHandler}/>
                        </div>


                        <button className="btn btn-success" >Save</button>
                        <button className="btn btn-danger" onClick={cancelHandler} style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>

                </div>
            </div>
        </div>

    );
    }

export default POWER;