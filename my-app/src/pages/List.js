import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const List = props => {
  const [searchResults, setSearchResults] = useState({});
  const searchValue = props.match.params.name;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
        .then(res => res.json())
        .then(json => setSearchResults(json))
    }

    fetchData();
  }, [searchValue]);

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
          {
            searchResults.results && searchResults.results.map((
              { gender, id, name, origin, species }) => (
                <Table.Row key={id}>
                  <Table.Cell>
                    <Link to={`/details/${id}`}>
                      {name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{species}</Table.Cell>
                  <Table.Cell>{gender}</Table.Cell>
                  <Table.Cell>{origin.name}</Table.Cell>
                </Table.Row>
              )
            )
          }
        </Table.Body>
      </Table>
    </div>
  );
}

export default withRouter(List);
