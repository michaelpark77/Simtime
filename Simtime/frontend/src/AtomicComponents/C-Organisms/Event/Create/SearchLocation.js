/*global kakao*/
import React, { useState, useCallback, Fragment, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { searchPlaces } from "../../../../actions/mapApi";
import SearchBar from "../../../B-Molecules/Form/SearchBar";
import Map from "../../../A-Atomics/Map/Map";
import ContextStore from "../../../../contexts/contextStore";
import {
  MAIN_COLOR,
  ST_GTAY,
  ST_SEMI_YELLOW,
  ST_YELLOW_LIGHT,
} from "../../../Colors";

const Wrap = styled.div`
  width: 100%;
`;
const MySearchBar = styled(SearchBar)`
  margin-bottom: 15px;
`;

const StyledMap = styled(Map)``;


function SearchLocation(props) {
  const [myLocation, setMyLocation] = useState(props.location);

  return (
    <Wrap {...props}>
      {myLocation.lat}
      <MySearchBar
        label="Place"
        name="ePlace"
        width="100%"
        search={searchPlaces}
      />
      <StyledMap
        width="100%"
        height="164px"
        mapId="eventMakerMap"
        name={myLocation.name}
        lng={myLocation.lng}
        lat={myLocation.lat}
      ></StyledMap>
    </Wrap>
  );
}

export default SearchLocation;

SearchLocation.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

SearchLocation.defaultProps = {
  width: "100%",
  height: "40px",
  location: {lat: 37.488376,lng: 126.752351, name: "현위치"}
};
