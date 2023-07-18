const Card = () => {
  return (
    <div className="col-sm-4 mt-4">
      <div className="d-flex flex-row">
        <div className="card shadow mb-5 bg-body-tertiary">
          <img
            src="menu.imgUrl"
            className="card-img-top aspect-ratio-16x9"
            alt="..."
            width="350"
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title">title</h5>
            <p className="card-text">Harga</p>
            <a href="#" className="btn btn-primary btn-sm">
              Pesan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
