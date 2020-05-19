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
  const { width, height, mapId } = props;

  const [location, setLocation] = useState({
    lat: 37.488376,
    lng: 126.752351,
    name: "현위치",
  });

  const saveLocation = (option) => {
    setLocation({
      lat: parseFloat(option.lat),
      lng: parseFloat(option.lan),
      name: option.name,
    });
  };

  return (
    <Wrap {...props}>
      <MySearchBar
        label="Place"
        name="ePlace"
        desc="Event Place"
        width="100%"
        search={searchPlaces}
        doAfterSelect={saveLocation}
      />
      <StyledMap
        width="100%"
        height="164px"
        mapId={props.mapId}
        name={location.name}
        lng={location.lng}
        lat={location.lat}
        location={location}
      ></StyledMap>
    </Wrap>
  );
}

export default SearchLocation;

SearchLocation.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  mapId: PropTypes.string,
};

SearchLocation.defaultProps = {
  width: "100%",
  height: "40px",
  mapId: "eventMakerMap",
};
