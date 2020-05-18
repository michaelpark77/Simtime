import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Map extends Component {
  myMap = null;
  marker = null;

  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
    };
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.marker.setMap(null);
      this.displayMarker(this.props.location);
    }
  }

  render() {
    return <MapWrap {...this.props} id={this.props.mapId}></MapWrap>;
  }

  displayMarker(location, map = this.myMap) {
    var eventLocation = new kakao.maps.LatLng(location.lat, location.lng);
    this.marker = new kakao.maps.Marker({
      position: eventLocation,
    });
    map.setCenter(eventLocation);
    this.marker.setMap(map);
  }

  loadMap() {
    var eventLocation = new kakao.maps.LatLng(
      this.state.location.lat,
      this.state.location.lng
    );
    var container = document.getElementById(this.props.mapId);
    var options = {
      center: eventLocation,
      level: 7,
    };

    kakao.maps.load(() => {
      container, options;
    });

    this.myMap = new window.kakao.maps.Map(container, options);
    this.displayMarker({
      lat: this.state.location.lat,
      lng: this.state.location.lng,
    });
  }
}

export default Map;

const MapWrap = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "150px")};
`;

Map.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  mapId: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.defaultProps = {
  mapId: "myMap",
  location: { lat: 37.488376, lng: 126.752351 },
};
