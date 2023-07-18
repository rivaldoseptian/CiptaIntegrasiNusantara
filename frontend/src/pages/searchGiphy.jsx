import SearchBar from "../Components/searchBar";
import Card from "../Components/CardGippy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { handleSearch } from "../store/action/actionGiphy";

function SearchGiphy() {
  const giphys = useSelector((state) => state.giphy.giphys);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  console.log(giphys.data);

  useEffect(() => {
    dispatch(handleSearch(searchTerm));
  }, [searchTerm]);

  return (
    <div className="container mt-5">
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        SEARCH YOUR GIPHY
      </h2>
      <div className="row height d-flex justify-content-center align-items-center mb-5">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search Giphy"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <Card giphys={giphys} />
      </div>
    </div>
  );
}

export default SearchGiphy;
