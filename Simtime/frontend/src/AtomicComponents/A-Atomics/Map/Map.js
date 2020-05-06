/*global kakao*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MapWrap = styled.div`
  margin-top: 8px;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "150px")};
`;

function Map(props) {
  const { lat, lng, hight, width } = props;

  const [loadMap, setLoadMap] = useState(false);
  // const [mapLat, setLat] = useState(lat);
  // const [mapLng, setLng] = useState(lng);

  useEffect(() => {
    var eventLocation = new kakao.maps.LatLng(lat, lng);

    kakao.maps.load(() => {
      let container = document.getElementById("myMap");
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
  }, []);

  return <MapWrap {...props} id="myMap"></MapWrap>;
}

export default Map;

Map.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  height: "50%",
  width: "100%",
  lat: 37.506502,
  lng: 127.053617,
};