import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import StarRating from "../StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AddMovie = ({ movies, setMovies }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    id: Math.random(),
    name: "",
    date: "",
    image: "",
    trailer: "",
    info: "",
    rate: "",
  });
  const clearForm = () => {
    setForm({
      id: "",
      name: "",
      date: "",
      image: "",
      trailer: "",
      info: "",
      rate: "",
    });
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  //add stars
  const addStars = (rating) => {
    setForm({ ...form, rate: rating });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, form]);
    clearForm();
    closeModal();
  };
  useEffect(() => {
    return clearForm();
  }, [modalIsOpen]);
  return (
    <div>
      <button onClick={openModal} className="btn btn-outline-success">
        Add movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div
          className="alert alert-warning text-secondary "
          style={{ height: "350px" }}
        >
          <form className="d-flex flex-column " onSubmit={addMovie}>
            <label htmlFor="name">Movie's name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="trailer">Movie's trailer</label>
            <input
              type="text"
              id="trailer"
              value={form.trailer}
              onChange={handleChange}
              required
            />
            <label htmlFor="image">Movie's image</label>
            <input
              type="text"
              id="image"
              value={form.image}
              onChange={handleChange}
              required
            />
            <label htmlFor="info">about the movies</label>
            <input
              type="text"
              id="info"
              value={form.info}
              onChange={handleChange}
            />
            <label htmlFor="date">movie release dates</label>
            <input
              type="date"
              id="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <StarRating rate={form.rate} addStars={addStars} />
            <span className="d-flex justify-content-between">
              <button type="submit" className="badge badge-success">
                Add
              </button>
              <button onClick={closeModal} className="badge badge-danger">
                X
              </button>
            </span>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddMovie;
