import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  MAIN_COLOR,
  ST_YELLOW_LIGHT,
  ST_SEMI_YELLOW,
  ST_SEMI_GRAY,
  ST_WHITE,
} from "../../Colors";

import TableRow from "../../A-Atomics/Table/TableRow";
import Image from "../../A-Atomics/Image";


const Icon = styled(Image)``;

// const UserCard = styled(UserCardForList)`
//   cursor: pointer;
// `;

const StyledTableRow = styled(TableRow)`
  background-color: ${(props) =>
    props.isSelected ? ST_YELLOW_LIGHT : ST_WHITE};
`;

function SelectTable(props) {
  const [selectedOption, setSelectedOption] = useState(props.defaultOption);
  
  const ff = (child) =>{
    console.log(child.props.username)
  }

  let fn = child => {return (<TableRow onClick={()=>{ff(child)}}>{React.cloneElement(child,{})}</TableRow>)} 

  let items = React.Children.map(props.children, fn); 

  // const renderRows = (datas = []) => {
  //   return datas.map((data, index) => {
  //     return (
  //       <StyledTableRow
  //         rowNum={index}
  //         key={data.id}
  //         isSelected={data.id == selectedOption}
  //         onClick={() => setSelectedOption(data.id)}
  //       >
  //         {items}
  //         {data.id == selectedOption ? (
  //           <Icon src="https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check.png" />
  //         ) : null}
  //       </StyledTableRow>
  //     );
  //   });
  // };

  return <Fragment>{items}</Fragment>;
}

export default SelectTable;





// class Buttons extends React.Component{
//   constructor(){
//     super();
//     this.state = {selected: 'None'}
//   }
//   selectItem(selected){
//     this.setState({selected})
//   }
//   render(){
//     console.log(this.props)
//     let fn = child => React.cloneElement(child,{
//       onClick: this.selectItem.bind(this, child.props.children)
//     })

//     let items = React.Children.map(this.props.children, fn); 
//     return(
//       <div>
//         <h2> seleted : {this.state.selected}</h2>
//         {items}
//       </div>
//     )
//   }
// }



// function SelectTable(props) {
//   return (
//     <Buttons>
//       <div>A</div> 
//       <div>B</div> 
//       <div>C</div> 
//     </Buttons>
//   )
// }

// export default SelectTable;

SelectTable.propTypes = {
  defaultOption: PropTypes.string,
  datas: PropTypes.array,
};

SelectTable.defaultProps = {
  defaultOption: "0",
  datas: [
    {id:"0",
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "arara",
    },
    {id:"1",
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/add-yellow.png",
      username: "hello",
    },
    {id:"2",
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/arrow-down.png",
      username: "hey",
    },
    {id:"3",
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/user-basic.png",
      username: "parkh",
    },
    {id:"4",
      profile_image:
        "https://simtime-bucket.s3.ap-northeast-2.amazonaws.com/static/img/icons/check-valid.png",
      username: "admin",
    },
  ],
};
