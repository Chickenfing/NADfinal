import React { Component } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const ImageContainer = styled.div`
    align-self: flex-end;
    
`;

const StyledIcon = styled.i`
    margin: 5px;
`;

class HeaderIcon extends Component {
    render() {
        <ImageContainer>
            <StyledIcon class="fa fa-shopping-cart fa-2x" aria-hidden="true"></StyledIcon>
            <StyledIcon class="fa fa-bell-o fa-2x" aria-hidden="true"></StyledIcon>
            <StyledIcon class="fa fa-user-circle fa-2x" aria-hidden="true"></StyledIcon>
        </ImageContainer>
    }
}

export default HeaderIcon