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
      </div>
    </form>
  );
}

export default SearchForm;
