import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Text = styled.h1`
    font-size: 36px;
    color: grey;
`;

class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        <Text>Greeting: {this.props.greeting}</Text>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
