import SearchBar from "../Components/searchBar";
import Card from "../Components/CardGippy";

function SearchGiphy() {
  return (
    <div className="container mt-5">
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        SEARCH YOUR GIPHY
      </h2>
      <SearchBar />
      <div className="row mb-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SearchGiphy;
