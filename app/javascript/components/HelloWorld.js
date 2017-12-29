import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Header } from './header'

const Span= styled.span`
    color:red;
`

const Text = styled.h1`
    font-size: 36px;
    color: grey;
    ${Span} {
        color: blue;
    }
`;

class HelloWorld extends React.Component {
  render () {
      const { greeting }=this.props;

        if (!greeting){
          return null;
        }
        return (
            <div>
                <Header>
                    <Text>
                        Greeting: {greeting}
                    </Text>
                    <Span>Hello</Span>
                </Header>
            </div>
        );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
