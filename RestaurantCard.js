import { IMG_CDN_URL } from "./Constant";


const RestaurantCard = ({ cloudinaryImageId, name, cuisines, costForTwoString, avgRating, slaString }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <div className="card-content">
                <h2>{name}</h2>
                <h4>{cuisines.join(",")}</h4>
                <h5>{slaString}</h5>
                <h4>&#9734; {avgRating}</h4>
                <h6>{costForTwoString}</h6>
            </div>
        </div>
    )
}
export default RestaurantCard