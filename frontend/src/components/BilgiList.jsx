import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from './EditBilgi';
const BilgiList = ({tutorials,deleteTutorial,getTutorials}) => {

  const[item,setItem]=useState("")

// const deleteTutorial = async (id) => {
//   await axios.delete(`${url}/${id}/`);
// };


// bootstrapten hareketli bir yapı olan modal kullanacağım için index.html e bootstrap in script etiketini ekledik
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({ id, title, description }) => {
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description} </td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    className="text-danger"
                    size={22}
                    onClick={() => deleteTutorial(id)}
                  />

                  <FaEdit
                    type="button"
                    className="text-warning me-2 "
                    size={20}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={()=>setItem({id,title,description})}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal */}
     <EditBilgi item={item} setItem={setItem} getTutorials={getTutorials}/>
    </div>
  );
}

export default BilgiList