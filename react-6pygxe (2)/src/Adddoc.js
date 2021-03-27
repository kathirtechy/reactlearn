import React, { useState, useEffect } from "react";
import axios from "axios";

function Adddoc() {
  const initialFormState = { title: "", body: "" };
  var validationErrors = { title: "", body: "" };
  const [document, setDocument] = useState(initialFormState);
  const [document1, setDocument1] = useState(validationErrors);
  // useEffect(() => {
  //   //  console.log(document1);
  //   //setDocument({...document1,[name]:value})
  // },[]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log('x---'+name+'v----'+value)
    setDocument({ ...document, [name]: value });

    //console.log(document);
  }

  function Newsubmit(event) {
    event.preventDefault();
    // console.log("submit----", document);
    // console.log("val----", document1);
    const isFormvalid = validation();
    if (isFormvalid) {
      console.log("a---");
    }
    //validation();
  }

  function validation() {
    const { title, body } = document;
    // console.log("val----" + title + "bo--" + body);
    // console.log(document1);
    const errors = {};
    let isValid = true;
    if (!title) {
      errors["title"] = "please enter title";
      isValid = false;
    }
    if (!body) {
      errors["body"] = "please enter body";
      isValid = false;
    }
    console.log("e---", errors);
    setDocument1(errors);
    //setDocument1({ ...document1, errors });
    // document1: errors
    //console.log(document1);
    return isValid;
  }

  return (
    <>
      <div className="container">
        Hook Add form
        <form onSubmit={Newsubmit}>
          <div className="form-group">
            <label htmlFor="title">title:</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              id="title"
              placeholder="Enter title"
              name="title"
            />
            <span className="text-danger">{document1.title}</span>
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="form-control"
              id="body"
              placeholder="Enter body"
              name="body"
            />
            <span className="text-danger">{document1.body}</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Adddoc;
