import React, { useState } from "react";

const AddBilgi = ({postTutorial}) => {

const[title,setTitle]=useState("")
const[desc,setDesc]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()

//  const postTutorial = async (yeniVeri) => {
//    await axios.post(url, yeniVeri);
//  };
postTutorial({title:title,description:desc})

// database e yolla
// axios.post(url, {title:title,description:desc})
//         .then(response => settutorials(response));
// }
}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
