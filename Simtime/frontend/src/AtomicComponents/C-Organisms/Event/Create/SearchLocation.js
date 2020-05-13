/*global kakao*/
import React, { useState, useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  MAIN_COLOR,
  ST_GTAY,
  ST_SEMI_YELLOW,
  ST_YELLOW_LIGHT,
} from "../../../Colors";

import Input from "../../../A-Atomics/Form/Input";
import SearchBar from "../../../B-Molecules/Form/SearchBar";
import Map from "../../../A-Atomics/Map/Map";

import ContextStore from "../../../../contexts/contextStore";

const Wrap = styled.div`
  width: 100%;
`;
const MySearchBar = styled(SearchBar)`
  margin-bottom: 15px;
`;

const StyledMap = styled(Map)``;
const getLocations = () => {
  console.log("dd");
};
// const getLocations = () => {
//   var placeList = [];
//   // 장소 검색 객체를 생성합니다
//   var ps = new kakao.maps.services.Places();
//   // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
//   var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

//   // 키워드로 장소를 검색합니다
//   searchPlaces();

//   / 키워드 검색을 요청하는 함수입니다
// function searchPlaces() {

//     var keyword = document.getElementById('keyword').value;

//     if (!keyword.replace(/^\s+|\s+$/g, '')) {
//         alert('키워드를 입력해주세요!');
//         return false;
//     }

//     // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
//     ps.keywordSearch( keyword, placesSearchCB);
// }

// // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
// function placesSearchCB(data, status, pagination) {
//     if (status === kakao.maps.services.Status.OK) {

//         // 정상적으로 검색이 완료됐으면
//         // 검색 목록과 마커를 표출합니다
//         displayPlaces(data);

//         // 페이지 번호를 표출합니다
//         displayPagination(pagination);

//     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

//         alert('검색 결과가 존재하지 않습니다.');
//         return;

//     } else if (status === kakao.maps.services.Status.ERROR) {

//         alert('검색 결과 중 오류가 발생했습니다.');
//         return;

//     }
// }

//   return datas;
// };

function SearchLocation(props) {
  const [location, setLocation] = useState({
    lat: 37.488376,
    lng: 126.752351,
    name: "현위치",
  });

  return (
    <Wrap {...props}>
      <MySearchBar
        label="Place"
        name="ePlace"
        width="100%"
        search={getLocations}
      />
      <StyledMap
        width="100%"
        height="164px"
        mapId="eventMakerMap"
        name={location.name}
        lng={location.lng}
        lat={location.lat}
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
};
