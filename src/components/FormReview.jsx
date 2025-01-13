import axios from "axios";
import { useState } from "react";


const initialFormData = {
  name: "",
  vote: 1,
  text: "",
};


function FormReview({ id, onSuccessfulReview = () => {} }) {

  const [formData, setFormData] = useState(initialFormData);
  
  function onFormChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
        
        
  function storeReview(event) {
    event.preventDefault();
    console.log("salvataggio recensione");

    axios
      .post(`http://localhost:3000/api/films/${id}/reviews`, formData)
      .then((res) => {
        console.log(res);
        onSuccessfulReview();
        setFormData(initialFormData);

      })
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
      });


  }
  return (
    <div>
      <div className="container">
        <div>
          <div className="px-2 pt-5 pb-2">
            <strong>Scrivi anche tu una recensione</strong>
          </div>
        </div>
        <div className="p-2">
          <form onSubmit={storeReview}>
            <p className="form">
              <label className="form-label" htmlFor="name"></label>
              <input
                className="form"
                type="text"
                placeholder="Nome"
                name="name"
                id="name"
                value={formData.name}
                onChange={onFormChange}
              />
            </p>
            <p>
              <label htmlFor="vote">Rating:</label>
              <select name="vote" id="vote" value={formData.vote} onChange={onFormChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <p>
              <label className="form-label" htmlFor="text"></label>
              <textarea
                rows="4"
                name="text"
                id="text"
                placeholder="Scrivi la tua recensione"
                className="form-control"
                value={formData.text}
                onChange={onFormChange}
              ></textarea>
            </p>
            <div className="d-grid gap-2">
              <button className="btn brand-cl-bg  my-3">Invia</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormReview;
