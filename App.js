import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   - Logo
 *   - Nav Items
 *
 * Body
 *   - Serch
 *   - Resturant Container
 *     - Resturant Card
 *        - Image
 *        - Name of Resturant
 *        - cuisine
 *        - Star Reting
 *        - Estimated time of delivery
 *
 *
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restObj = {
  info: {
    id: "841660",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "UDHANA DARWAZA",
    areaName: "SHHLOK BUSINESS CENTRE",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4,
    veg: true,
    parentId: "2456",
    avgRatingString: "4.0",
    totalRatingsString: "50+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-25 01:55:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/dominos-pizza-udhana-darwaza-shhlok-business-centre-surat-841660",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search Component</div>
      <div className="res-container">
        <ResturantCard
          restName="Domino's Pizza"
          cuisine="Pizzas, Italian"
          ratings="4.5 stars"
          deliveryTime="15-20 mins"
          restLogo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100/d0450ce1a6ba19ea60cd724471ed54a8"
        />
        <ResturantCard
          restName="KFC"
          cuisine="Burgers, Fast Food"
          ratings="3.5 stars"
          deliveryTime="20-25 mins"
          restLogo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_100721.JPG"
        />
      </div>
    </div>
  );
};

const resturantCardStyle = {
  backgroundColor: "#f0f0f0",
};

//const ResturantCard = ({ restName, cuisine, ratings, deliveryTime }) => {
const ResturantCard = (props) => {
  //console.log(props);
  const { restName, cuisine, ratings, deliveryTime, restLogo } =
    props; /* This is object desctructuring */
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="Resturant Logo" src={restLogo} />
      <h3>{restName}</h3>
      <h4>{cuisine}</h4>
      <h4>{ratings}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <h1>Footer Compnent</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

root.render(<AppLayout />);
