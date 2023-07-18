const SearchBar = () => {
  return (
    <div className="row height d-flex justify-content-center align-items-center mb-5">
      <div className="col-md-6">
        <div className="form">
          <i className="fa fa-search"></i>
          <input
            type="text"
            className="form-control form-input"
            placeholder="Search Giphy"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
