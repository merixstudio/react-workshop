import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Segment,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

const Home = () => {
  const history = useHistory();
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchPhraseChange = event => {
    setSearchPhrase(event.target.value);
  }

  const handleSubmit = () => {
    history.push(`list/${searchPhrase}`)
  }

  return (
    <div className="homepage">
      <Segment
        textAlign="center"
        style={{ marginTop: '200px' }}
        vertical
      >
        <Container text>
          <Header content="Rick & Morty Character Search" />
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Search</label>
              <input placeholder="Type search phrase" onChange={handleSearchPhraseChange} value={searchPhrase}/>
            </Form.Field>
            <Button icon labelPosition='right'>
              Submit <Icon name="search" />
            </Button>
          </Form>
        </Container>
      </Segment>
    </div>
  )
}

export default Home;
