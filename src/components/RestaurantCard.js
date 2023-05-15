import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } =
     resData.info;
  
    // console.log(props);
    return (
      <div
        className="res-card" /*style={styleCard}*/
        style={{ backgroundColor: "#D3D3D3" }}
      >
        <img
          className="Bikaner-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="bikaner-logo"
        ></img>
        <h3 style={{ marginBottom: "10px" }}>{name}</h3>
        <h5 className="small-header">{costForTwo}</h5>
  
        <h5 className="small-header">{cuisines.join(", ")}</h5>
        <h5 className="small-header">{avgRating} Stars</h5>
        <h5 className="small-header">{sla.deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestaurantCard;