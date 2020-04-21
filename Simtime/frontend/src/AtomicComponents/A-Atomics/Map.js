/*global kakao*/
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MapWrap = styled.div`
    width:${props=> props.width ? props.width : "500px" };
    height:${props=> props.height ? props.height : "500px" };    
`


function Map(props) {
    const [count, setCount] = useState(0);

    const loadMap = () => { 
        const script = document.createElement("sctipt");
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fe2bbf9ead49adfdc397507e333dcd49&autoload=false";
        document.head.appendChild(script);
        console.log("mao");
        script.onload = () => {
            console.log("onload");
            kakao.maps.load(() => {
              let container = document.getElementById("myMap");
              let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
              };
      
              const map = new window.kakao.maps.Map(container, options);
            });
      }
    
    };

    return  <MapWrap id="myMap"  {...props} >{loadMap()}</MapWrap>
}

export default Map


Map.propTypes = {

  };

  Map.defaultProps = {

};
  
