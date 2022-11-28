import React from "react";
import  { FaMapMarkerAlt } from "react-icons/fa";

function Card(props) {
//   let badgeText;
//   if (props.openSpots === 0) {
//     badgeText = "Sold-Out";
//   } else if (props.location === "Online") {
//     badgeText = "Online";
//   }
  return (
    <section>
      <div className="contact-card">
        <div className="card-parent">
          {/* <div className="card-badge">{props.open === 0 ? "Sold-Out" : props.open }</div> */}
          {/* {props.open === 0 && <div className="card-badge">{badgeText}} */}
          {/* {badgeText && <div className="card-badge">{badgeText}</div>} */}
          {/* <img src={`./images/${props.src}`} className="finger" /> */}
          <div className="image-div">
            <img src={props.imageUrl} className="finger" alt="fingers" />
          </div>

          <div className="detail-div">
            <div className="card-stats mt">
              <FaMapMarkerAlt style={{fontSize: "20px", color: "#C7899A",marginRight:"3px"}}></FaMapMarkerAlt>
              <span>{props.location}</span>
              <span><a className="gray" style={{marginLeft:"5px"}} href={props.googleMapsUrl}>View on Google</a> .</span>
            </div>
            <h2 className=" mt mb ">{props.title}</h2>
            <p className="mt card-stats">
              <strong className="mr">{props.startDate}</strong> - &nbsp; <strong>{props.endDate}</strong>
            </p>
            <p className="mt para">{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
