const Card = ({ giphys }) => {
  return (
    <>
      {giphys.data?.map((giphy, index) => {
        return (
          <div className="col-sm-4 mt-4" key={index}>
            <div className="d-flex flex-row">
              <div className="card shadow mb-5 bg-body-tertiary">
                <img
                  src={giphy.images.fixed_height.url}
                  className="card-img-top aspect-ratio-16x9"
                  alt="..."
                  style={{ width: `350px`, height: `200px` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
