import React, { Component } from "react";
// import "../sql.css";
import Data from "../AccountAIAlpha.json";


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const users = await response.json();
      console.log(Data);
      this.setState({ users, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  renderTableHeader = () => {
    return Object.keys(Data[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };

  renderTableRows = () => {
    return Data.map((Data, index) => {
      return (
        <tr className="text-lG" key={index}>
          {Object.values(Data).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      );
    });
  };

  render() {
    const { users, isLoading, isError } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }

    return users.length > 0 ? (
      <table className="content-table active-row tbody">
        <thead>
          <tr>{this.renderTableHeader()}</tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    ) : (
      <div>No users.</div>
    );
  }
}

export default Table;
