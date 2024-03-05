import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./search.css";
import { addSearch } from "../../../reduxFiles/citiesRedux";

const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  function handleClick() {
    if (searchValue.trim().length > 0) {
      navigate(`/${searchValue}`);
    }
  }

  function handleCurrentLocationClick() {
    if (position.latitude && position.longitude) {
      navigate(`/lat=${position.latitude}&lon=${position.longitude}`);
    } else {
      console.log("Fetching location...");
    }
  }

  return (
    <div
      className={`${location.pathname !== "/" ? "otherPage" : ""} searchBar`}
    >
      <span className="material-symbols-outlined searchIcon">search</span>
      <input
        type="text"
        placeholder="Search Your City"
        onChange={(e) => setSearchValue(e.target.value)}
        id="search"
        value={searchValue}
      />
      <button className="button" onClick={handleClick}>
        Search
      </button>
      <div className="currentLocation" onClick={handleCurrentLocationClick}>
        <span class="material-symbols-outlined">near_me</span>
        <p>Use Your Current Location</p>
      </div>
    </div>
  );
};

export default SearchBar;
