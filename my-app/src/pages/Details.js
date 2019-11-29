import React, { useEffect, useState } from 'react';
import {
  Card,
  Image,
  Icon,
} from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

const Details = ({ match }) => {
  const [details, setDetails] = useState({});
  const id = match.params.id;

  useEffect(() => {
    const fetchDetails = async () => {
      await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(json => setDetails(json))
    }

    fetchDetails();
  }, [id]);

  const getGenderIcon = gender => {
    switch(gender) {
      case 'Male':
        return <Icon name="mars" />
      case 'Female':
        return <Icon name="venus" />
      case 'Genderless':
        return <Icon name="genderless" />
      case 'unknown':
        return <Icon name="transgender" />
      default:
        return null
    }
  }

  return (
    <div>
      {Object.keys(details).length ? (
        <Card style={{ margin: '0 auto' }}>
          <Image src={details.image} />
          <Card.Content>
            <Card.Header>
              { details.name }
            </Card.Header>
            <Card.Meta>
              { details.species } - { details.status }
            </Card.Meta>
            <Card.Description>
              { getGenderIcon(details.gender) }
              { details.gender }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            { details.location.name }
          </Card.Content>
        </Card>
      ) : ''}
    </div>
  );
}

export default withRouter(Details);
