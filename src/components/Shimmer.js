const Shimmer = () => {
  // return <h1>Shimmer UI loading.....</h1>;
  return (
    <div className="res-container">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
