import React from 'react';
import { Table } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

const List = props => {
  const searchValue = props.match.params.name;

  console.log(searchValue);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Species</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Origin</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Species</Table.Cell>
            <Table.Cell>Gender</Table.Cell>
            <Table.Cell>Origin</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default withRouter(List);
