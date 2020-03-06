import React from "react";

export function Input(props) {
  const [value, setValue] = useState(props.value || "");
  const onChange = value => {
    setValue(value);
    if (props.handleChange) {
      props.handleChange(value);
    }
  };
  return (
    <input value={value} onChange={e => onChange(e.target.value)} />
    // <input value={value} onChange={({target: {value}}) => onChange(value)}
  );
}

export default class Form extends React.Component {
  state = {
    value: "aaaaaa"
  };
  handleChange = value => {
    this.setState({
      value
    });
  };
  render() {
    return (
      <div>
        <Input value={this.state.value} />
      </div>
    );
  }
}
