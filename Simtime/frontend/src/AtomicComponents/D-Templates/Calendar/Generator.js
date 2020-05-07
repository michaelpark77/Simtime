export function getStrYear(date) {
  return date.getFullYear().toString();
}

export function getStrMonth(date, type = "mm") {
  if (type == "mm") {
    return ("0" + (date.getMonth() + 1).toString()).substr(-2);
  } else {
    return (date.getMonth() + 1).toString();
  }
}

export function getStrDate(date, type = "dd") {
  if (type == "dd") {
    return ("0" + date.getDate().toString()).substr(-2);
  } else {
    return date.getDate().toString();
  }
}

export function getStrFullDate(date, type = "yyyymmdd") {
  type.toLowerCase();

  if (type == "yyyymmdd") {
    return getStrYear(date) + getStrMonth(date) + getStrDate(date);
  } else if (type == "yyyy-mm-dd") {
    return `${getStrYear(date)}-${getStrMonth(date)}-${getStrDate(date)}`;
  } else if (type == "yyyy-m-d") {
    return `${getStrYear(date)}-${getStrMonth(date, "m")}-${getStrDate(
      date,
      "d"
    )}`;
  } else if (type == "yyyy/mm/dd") {
    return `${getStrYear(date)}/${getStrMonth(date)}/${getStrDate(date)}`;
  } else if (type == "yyyy/m/d") {
    return `${getStrYear(date)}/${getStrMonth(date, "m")}/${getStrDate(
      date,
      "d"
    )}`;
  } else {
    return `${getStrYear(date)}-${getStrMonth(date)}-${getStrDate(date)}`;
  }
}

export function addDate(date, num) {
  const resDate = new Date();
  resDate.setDate(date.getDate() + num);
  return resDate;
}

export function subDate(date1, date2) {
  return Math.floor(
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
  );
}

export function subWeek(date1, date2) {
  return Math.floor(subDate(date1, date2) / 7);
}

//달력 일자 생성
export function generate(startDate, endDate, currDate) {
  //00시로 맞추기위해 따로 new Date()를 "yyyy-m-d"형태로 변환해줌. 안해주면 간헐적으로 today의 id가 -1, 0 으로 간헐적으로 왔다갔다함.
  var today = new Date(getStrFullDate(new Date(), "yyyy-m-d"));
  var curr = new Date(startDate);

  //한 주차씩 담기용
  var weekDates_orgin = [];
  var weekDates = [];

  //최종 배열
  var dates_origin = [];
  var dates = [];

  while (curr <= endDate) {
    //week별 저장
    weekDates_orgin.push({ id: `${subDate(today, curr)}D`, day: curr });
    weekDates.push({
      id: `${subDate(today, curr)}D`,
      strDate: getStrFullDate(curr, "yyyy-mm-dd"), //"2020-04-15"
      year: curr.getUTCFullYear(),
      month: curr.getMonth() + 1,
      day: curr.getDay(), // 0~6
      isActive: getStrFullDate(curr) >= getStrFullDate(today),
      isActiveMonth:
        getStrFullDate(curr).substr(0, 6) ==
        getStrFullDate(currDate).substr(0, 6),
      date: curr.getDate().toString(), // "15"
    });

    //다음날 저장
    curr.setDate(curr.getDate() + 1);

    if (curr.getDay() == 0) {
      dates_origin.push({
        id: `${subWeek(today, curr)}W`,
        weekDates: weekDates_orgin,
      });

      dates.push({ id: `${subWeek(today, curr)}W`, weekDates: weekDates });
      weekDates_orgin = [];
      weekDates = [];
    }
  }
  return dates;
}
