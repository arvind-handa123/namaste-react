import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resturantData } = props; /* This is object desctructuring */
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resturantData?.info;
  //const { deliveryTime } = resturantData?.info.sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="Resturant Logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
    </div>
  );
};

export default ResturantCard;
