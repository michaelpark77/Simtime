import React, { useState, useCallback, Fragment } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import PropTypes from "prop-types";

import { addEvent, getEvent, editEvent } from "../../../actions/events";
import { MAIN_COLOR, ST_GTAY } from "../../Colors";

import ModalTitle from "../../A-Atomics/Modal/ModalTitle";
import ProgressBar from "../../A-Atomics/Deco/ProgressBar";
import InputWrap from "../../A-Atomics/Form/InputWrap";
import Input from "../../B-Molecules/Form/Input";
import TextArea from "../../B-Molecules/Form/TextArea";

import InputTag from "../../B-Molecules/Form/InputTag";
import InputTime from "../../B-Molecules/Form/InputTime";
import DatePicker from "../../D-Templates/Calendar/DatePicker";
import TimePicker from "../../D-Templates/Calendar/TimePicker";
import SearchBar from "../../B-Molecules/Form/SearchBar";
import SearchLocation from "../../C-Organisms/Event/Create/SearchLocation";
import Map from "../../A-Atomics/Map/Map";

import DashedButton from "../../A-Atomics/Button/DashedButton";
import { getStrFullDate } from "../Calendar/Generator";

import ContextStore from "../../../contexts/contextStore";

const Wrap = styled.div`
  border: solid 1px ${MAIN_COLOR};
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 320px) {
    width: 100%;
    height: 568px;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

const BarWrap = styled.div`
  width: 92%;
  height: 10%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.form`
  width: 90%;
  height: 82%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FormWrap = styled.div`
  width: 100%;
  height: 85%;
  // border: solid 1px blue;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const PageWrap = styled.div`
  // border: solid 1px red;
  width: 100%;
  ${(props) =>
    props.isActivePage
      ? `display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;`
      : `display:none;`}
`;

const MyInput = styled(Input)`
  margin-bottom: 15px;
`;

const MyTextArea = styled(TextArea)`
  margin-bottom: 15px;
`;
const MyInputTime = styled(InputTime)`
  margin-bottom: 15px;
`;

const MyDateInput = styled(Input)`
  margin-bottom: 15px;
`;

const PositionWrap = styled.div`
  width: 100%;
  position: relative;
`;

const MyDatePicker = styled(DatePicker)`
  ${(props) =>
    props.isShown
      ? `  
      width: 100%;
      background-color: white;
      position: absolute;
      top: 45px;
      right: 0px;`
      : "display: none;"}
`;

const MySearchBar = styled(SearchBar)`
  margin-bottom: 15px;
`;

const Buttons = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrap = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMap = styled(Map)``;

const Button = styled(DashedButton)`
  border-radius: 6px;
`;

function EventMaker(props) {
  const today = new Date();
  const [datePicker, setDatePicker] = useState(false);
  const [page, setPage] = useState(0);
  const [event, setEvent] = useState({
    eId: null,
    eName: "",
    eDate: getStrFullDate(today, "yyyy-mm-dd"),
    eTime: "AM 12:00",
    ePlace: { lat: 0, lng: 0, name: "unknown" },
    eMessage: "",
    eStatus: "CLOSED",
    eHost_id: "unknown",
  });

  const showDatePicker = () => {
    setDatePicker(!datePicker);
  };

  const selectDate = useCallback((strDate) => {
    setEvent({ eDate: strDate });
  }, []);

  const selectTime = useCallback((time) => {
    setEvent({ eTime: time });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { eId, eName, eDate, eStatus, eMessage, ePlace } = event;
    const host = props.user.id;

    if (props.event) {
      props.editEvent({
        id: eId,
        host: host,
        event_name: eName,
        event_at: eDate,
        status: eStatus,
        message: eMessage,
      });
    } else {
      props.addEvent({
        host: host,
        event_name: eName,
        event_at: eDate,
        status: eStatus,
        message: eMessage,
      });
    }

    // props.onClose();
  };

  // const handleChange = useCallback((e) => {
  //   setEvent({ ...event, [e.target.name]: e.target.value });
  //   alert({ ...event, [e.target.name]: e.target.value });
  // }, []);

  const handleChange = (e) => {
    // if (e.target.name == "ePlace") {
    //   setEvent({ ...event, ePlace: { lat: 1, lng: 1, name: "unknown" } });
    // } else {
    //   setEvent({ ...event, [e.target.name]: e.target.value });
    //   console.log({ ...event, [e.target.name]: e.target.value });
    // }
    setEvent({ ...event, [e.target.name]: e.target.value });
    console.log({ ...event, [e.target.name]: e.target.value });
  };

  const locationChange = (location) => {
    // if (e.target.name == "ePlace") {
    //   setEvent({ ...event, ePlace: { lat: 1, lng: 1, name: "unknown" } });
    // } else {
    //   setEvent({ ...event, [e.target.name]: e.target.value });
    //   console.log({ ...event, [e.target.name]: e.target.value });
    // }
    setEvent({ ...event, ePlace: location });
    console.log("gell", { ...event, ePlace: location });
  };

  const firstPage = () => {
    return (
      <PageWrap {...props} isActivePage={page == 0}>
        <MyInput
          label="Event"
          name="eName"
          desc="Event Name"
          value={event.eName}
          onChange={handleChange}
        />
        <PositionWrap>
          <MyDateInput
            name="eDate"
            label="Date"
            desc={event.eDate}
            value={event.eDate}
            readOnly={true}
            cursor="pointer"
            onClick={showDatePicker}
          ></MyDateInput>
          <MyDatePicker
            isShown={datePicker}
            selectDate={selectDate}
            selectedDate={event.eDate}
            onClose={() => {
              setDatePicker(false);
            }}
          />
        </PositionWrap>
        <MyInputTime name="eTime" label="Time" cursor="pointer" />
        {/* <MyInput label="Location" name="eLocation" desc="Search Location" /> */}
        <SearchLocation name="ePlace" onChange={locationChange} />
      </PageWrap>
    );
  };

  const secondPage = () => {
    return (
      <PageWrap {...props} isActivePage={page == 1}>
        <MyTextArea
          label="Message"
          name="eMessage"
          value={event.eMessage}
          onChange={handleChange}
          desc="1000자 이내"
          height="200px"
          maxLength={1000}
        />
        <InputTag label="Tag" name="eTag" desc="Tag 입력"></InputTag>
      </PageWrap>
    );
  };

  const thirdPage = () => {
    return (
      <PageWrap {...props} isActivePage={page == 2}>
        <MyInput label="Place" name="place" desc="search" />
      </PageWrap>
    );
  };

  const handleClick = (e, targetPage) => {
    e.preventDefault();
    setPage(targetPage);
  };

  const renderButtons = (page) => {
    switch (page) {
      case 0:
        return (
          <ButtonWrap width="100%">
            <Button onClick={(e) => handleClick(e, page + 1)}>Next</Button>
          </ButtonWrap>
        );

      case 2:
        return (
          <Fragment>
            <ButtonWrap width="48%">
              <Button onClick={(e) => handleClick(e, page - 1)}>Prev</Button>
            </ButtonWrap>
            <ButtonWrap width="48%">
              <Button type="submit">Done</Button>
            </ButtonWrap>
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <ButtonWrap width="48%">
              <Button onClick={(e) => handleClick(e, page - 1)}>Prev</Button>
            </ButtonWrap>
            <ButtonWrap width="48%">
              <Button onClick={(e) => handleClick(e, page + 1)}>Next</Button>
            </ButtonWrap>
          </Fragment>
        );
    }
  };

  return (
    <ContextStore.Provider value={event.eDate}>
      <Wrap {...props}>
        <HeaderWrap>
          <BarWrap>
            <ProgressBar />
          </BarWrap>
          <ModalTitle>EVENT</ModalTitle>
        </HeaderWrap>

        <ContentWrap onSubmit={handleSubmit}>
          {firstPage()}
          {secondPage()}
          {thirdPage()}
          <Buttons>{renderButtons(page)}</Buttons>
        </ContentWrap>
      </Wrap>
    </ContextStore.Provider>
  );
}

const mapStateToProps = (state) => ({
  event: state.events.selectedEvent[0],
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  addEvent,
  getEvent,
  editEvent,
})(EventMaker);

// export default EventMaker;

EventMaker.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  selectedDate: PropTypes.string,
};

EventMaker.defaultProps = {
  height: "568px",
  width: "320px",
  selectedDate: null,
};
