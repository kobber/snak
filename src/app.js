import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { H1, Button, Row, Col, color } from './styles';
// import { H2, P, Strong } from './styles/type';
import * as _ from './styles';

class MyComp extends React.Component {
  render() {
    return (
      <div>
        <_.Row>
          <_.Col mobile="12" tablet="6">
            <_.H1>Headline 1</_.H1>
            <_.P><_.Strong>Lorem ipsum dolor sit amet</_.Strong>, consectetur adipisicing elit. Excepturi voluptatum consequuntur debitis ratione? Id nemo a maiores, eaque ullam iusto consequatur laudantium odio, dicta dolore facere, dolores vitae laboriosam veniam.</_.P>
            <_.P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptatum consequuntur debitis ratione? Id nemo a maiores, eaque ullam iusto consequatur laudantium odio, dicta dolore facere, dolores vitae laboriosam veniam.</_.P>
            <_.H2>Headline 2</_.H2>
            <_.P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptatum consequuntur debitis ratione? Id nemo a maiores, eaque ullam iusto consequatur laudantium odio, dicta dolore facere, dolores vitae laboriosam veniam.</_.P>
          </_.Col>
          <_.Col mobile="12" tablet="6">
            <_.Button color="primary">Primary</_.Button>
            <_.Button color="secondary">Secondary</_.Button>
            <_.Button color="secondary" size="small">Secondary</_.Button>
            <_.Button color="secondary">Secondary</_.Button>
            <_.Button color="secondary">Secondary</_.Button>
          </_.Col>
        </_.Row>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MyComp />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
