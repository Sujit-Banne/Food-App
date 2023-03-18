import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "./Constant";
import Shimmer from './Shimmer'

function filterData(searchTxt, restaurants) {
    const filterData = restaurants.filter((restaurant) => {
        return restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    })
    return filterData
}

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchTxt, setSearchTxt] = useState('')

    useEffect(() => {
        getRestaurants()
    }, [])

    async function getRestaurants() {
        try {
            const data = await fetch(swiggy_api_URL)
            const json = await data.json()
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        }
        catch (error) {
            console.log(error);
        }
    }

    if (!allRestaurants) return null
    // if (filteredRestaurants?.length === 0) return (
    //     <h1>No matches</h1>
    // )

    return (allRestaurants.length == 0) ? <Shimmer /> : (
        <>
            <div id="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        //need to filter the data
                        const data = filterData(searchTxt, allRestaurants)
                        // update the state - restaurants
                        setFilteredRestaurants(data)
                    }}
                ><i className="fa fa-search"></i></button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body