import React, { useEffect, useState } from "react";
import axios from "axios";
const EditBilgi = ({ item, setItem, getTutorials }) => {
	const { id, title: eskiTitle, description: eskiDesc } = item;
	const [title, setTitle] = useState(eskiTitle);
	const [description, setDescription] = useState(eskiDesc);

	console.log(title, description);
	//? https://react.dev/reference/react/useState#usestate
	//! State degiskeninin degeri, 1.render ile initialState
	//! parametresinin ilk degerini alir. Dolayisiyle bu durumda
	//! prop'tan gelen ilk deger state'e aktarilir.
	//! Sonradan degisen props degerleri useState'e aktarilmaz.
	//! Eger props'tan gelen degerleri her degisimde useState'e
	//! aktarmak istersek useEffect hook'unu componentDidUpdate
	//! gibi kullanabiriz.

	//* componentDidUpdate => gelişim/güncelleme
	useEffect(() => {
		setTitle(eskiTitle);
		setDescription(eskiDesc);
	}, [eskiDesc, eskiTitle]);

	const url = "https://tutorial-app-1.onrender.com";

	// const putTutorial = async () => {
	//   try {
	//     await axios.put(`${url}${id}/`, { title, description });
	//     getTutorials();
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };
	const putTutorial = async (eleman) => {
		try {
			await axios.put(`${url}${eleman.id}/`, eleman);
			getTutorials();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			class="modal fade"
			id="editModal"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title fs-5" id="exampleModalLabel">
							Modal
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						{/* inputlar  */}
						<div className="mb-3">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								className="form-control"
								id="title"
								value={title || ""}
								// onChange={(e) => setTitle(e.target.value)}
								onChange={(e) =>
									setItem({ ...item, title: e.target.value })
								}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="desc">Description</label>
							<input
								type="text"
								id="desc"
								className="form-control"
								value={description || ""}
								// onChange={(e) => setDescription(e.target.value)}
								onChange={(e) =>
									setItem({
										...item,
										description: e.target.value,
									})
								}
							/>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-bs-dismiss="modal"
							onClick={() => putTutorial(item)}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditBilgi;
