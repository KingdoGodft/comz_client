import React from 'react';
import styled from 'styled-components';
import { HomeContainer } from '~/containers';
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f6f7;
    padding: 25px 0;
`;

const Home: React.FC = () => {
    return(
        <Wrapper>
            <HomeContainer/>
        </Wrapper>
    )
}

export default Home;