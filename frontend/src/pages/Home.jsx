import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 " style={{ paddingTop: "80px" }}>
      <h2
        className="d-flex justify-content-center align-items-center  text-body"
        style={{ fontSize: "50px", fontWeight: "bold" }}
      >
        WELCOME TO YOUR GIPHY
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="https://www.lifepng.com/wp-content/uploads/2020/11/Giphy-Logo-png-hd.png"
          alt=""
          style={{ width: "300px", height: "250px" }}
        />
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <p>
          <NavLink to="/giphy">IRON MAN GIPHY</NavLink>
        </p>
        <p>
          <NavLink to="/giphy">SEARCH YOUR GIPHY</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Home;
