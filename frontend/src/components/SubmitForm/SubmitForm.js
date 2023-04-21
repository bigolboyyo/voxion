import React from "react";

function SubmitForm({ handleSubmit, inputText, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          className="form-control"
          id="inputText"
          rows="3"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SubmitForm;
