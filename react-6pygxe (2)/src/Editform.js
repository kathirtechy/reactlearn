import React, { useState, useEffect } from "react";
import axios from "axios";

function Editform(props) {
  const initialFormState = { title: "", body: "" };
  var validationErrors = { title: "", body: "" };
  const [document, setDocument] = useState(initialFormState);
  const [document1, setDocument1] = useState(validationErrors);
  useEffect(() => {
    const paramid = props.match.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${paramid}`, {})
      .then(res => {
        setDocument(res.data);
        //setDocument(false);
      });
    console.log(document);
    setDocument1({});
    //setDocument({...document1,[name]:value})
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log('x---'+name+'v----'+value)
    setDocument({ ...document, [name]: value });
  }

  function Newsubmit(event) {
    console.log("sub---", document);
    event.preventDefault();
    const isFormvalid = validation();
    if (isFormvalid) {
      console.log("a---");
    }
  }

  function validation() {
    const { title, body } = document;
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
    return isValid;
  }

  return (
    <>
      Hook Editform -{props.match.params.id}
      <div className="container">
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
              value={document.title}
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
              value={document.body}
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

export default Editform;
