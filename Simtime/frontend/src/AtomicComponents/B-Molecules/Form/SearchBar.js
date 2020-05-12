import React, { useState, useCallback, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MAIN_COLOR, ST_GTAY, ST_SEMI_YELLOW,ST_YELLOW_LIGHT } from "../../Colors";

import SearchBox from "../../A-Atomics/Filter/SearchBox";
import Paragraph from "../../A-Atomics/Font/Paragraph";


const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

const MyParagraph = styled(Paragraph)`
`;


const MyInput = styled(SearchBox)`
  width: ${(props) => (props.name ? "72%" : "100%")};
`;



function SearchBar(props) {
  const test = ["dddwers", "ddwerd","dddasf"];
  const {options, name, label, width, height} = props

  return (
      <Wrap {...props}>
         {label && (
        <MyParagraph fontSize="18px" color="MAIN_COLOR">
          {label}
        </MyParagraph>
      )}
        <MyInput options={test} width={"100%"} height={height} name={name} arrow={false} cursor={"default"} defaultOption={""}/>

      </Wrap>
  );
}

export default SearchBar;

SearchBar.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
  };
  SearchBar.defaultProps = {
    width: "100%",
    height: "40px",
    name: null

};
