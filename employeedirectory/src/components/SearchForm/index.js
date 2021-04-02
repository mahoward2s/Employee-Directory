import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({onSearch, searchTerm, handleSortByName}) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={searchTerm}
          onChange={onSearch}
          type="text"
          className="form-control"
          placeholder="Search Employee Name"
        />
        <button type="submit" onClick={handleSortByName} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
