"use client"

import Filter from "./icons/Filter"
import Listing from "./Listing"
import styles from "../components/components.module.css"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

// On mount, read url query parameters
// Query the database with these search parameters
// Render results out as a list of components

// const testData: LocationData[] = [
//   {
//     id: 1,
//     name: "J. Paul Leonard Library",
//     address: "",
//     phoneNumber: "",
//     hasWifi: true,
//     seatingCapacity: 1000,
//     category: "LIBRARY",
//     rating: 4.5,
//     busynessStatus: 7,
//     imageWebLink: "https://lh3.googleusercontent.com/p/AF1QipMSkLezfmMvzT2qOVixF_mgIM-PeU0hep6LvC9f=s1360-w1360-h1020",
//     locationWebsiteLink: "",
//     animalFriendliness: false,
//     operatingHours: [
//       {
//         day: "MONDAY",
//         openTime: "7:00",
//         closeTime: "23:00"
//       }
//     ]
//   }
// ]

type SearchResultsProps = {
  onFilterClick: (e: React.SyntheticEvent) => void;
}

function SearchResults(props: SearchResultsProps) {
  const { locations } = useContext(SearchContext);

  return (
    <div className={`shadow-2xl z-10 px-6 py-4 ${styles["search-results"]}`}>
        <button onClick={props.onFilterClick} className="flex no-wrap items-center gap-1.5 rounded-full bg-[#C6E2FF] px-6 py-2 font-josefin">
          <Filter size={20}/>
          {/* For some reason the text is a little higher than the icon */}
          <span className="align-text-bottom">Filters</span>
        </button>
        <div className="flex flex-col gap-6 mt-6">
          {locations.map((location) => 
            <Listing
              key={location.id}
              data={location} 
            />
          )}
        </div>
    </div>
  )
}

export default SearchResults