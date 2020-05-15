/*global kakao*/
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MapWrap = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "150px")};
`;


function Map(props) {
  const { location, name, hight, width, mapId } = props;
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    console.log(location)
    var eventLocation = new kakao.maps.LatLng(location.lat, location.lng);

    kakao.maps.load(() => {
      let container = document.getElementById(mapId);
      let options = {
        center: eventLocation,
        level: 7,
      };

      const map = new window.kakao.maps.Map(container, options);
      const marker = new kakao.maps.Marker({
        position: eventLocation,
      });

      marker.setMap(map);
    });

  });

  //forwardRef
  return <MapWrap {...props} id={mapId}></MapWrap>;
}

export default Map;

Map.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  location: PropTypes.object,
  mapId: PropTypes.string,
};

Map.defaultProps = {
  height: "50%",
  width: "100%",
  location:{ lat: 37.488376, lng: 126.752351, name: "현위치"},
  mapId: "myMap",
};
