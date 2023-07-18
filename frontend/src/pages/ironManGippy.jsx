import SearchBar from "../Components/searchBar";
import Card from "../Components/CardGippy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Ironmanfetch } from "../store/action/actionGiphy";

function IronmanGiphy() {
  const giphys = useSelector((state) => state.giphy.giphys);

  const dispatch = useDispatch();
  console.log(giphys.data);

  useEffect(() => {
    dispatch(Ironmanfetch());
  }, []);

  return (
    <div className="container mt-5 ">
      <h2
        style={{ fontSize: "40px", fontWeight: "bold", paddingBottom: "100px" }}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        IRON MAN GIPHY
      </h2>

      <div className="row mb-3">
        <Card giphys={giphys} />
      </div>
    </div>
  );
}

export default IronmanGiphy;
