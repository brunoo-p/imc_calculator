import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #71bbf822;
    z-index: 9999;
    overflow: hidden;
    display: flex;
    justify-content: center;

    ::-webkit-scrollbar {
          width: 3px;
          height: 10px;
      }
  
      ::-webkit-scrollbar-track {
          background: ${({ theme }) => theme.colors.primary};
      }
  
      ::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.colors.secondary};
          border-radius: 10px;
    }

    backdrop-filter: blur(5px);
    

`;

export const Content = styled.div`
    z-index: 99999;
    width: 100%;
    max-width: 1200px;
    height: 90%;
    display: flex;
    margin: 0;
    justify-content: center;
    position: relative;

    @media screen and (min-width: 800px) {
        width: 90%;
        margin: 4%;
    }
`;

type Props = {
    children: React.ReactNode;
}
const Portal: React.FC<Props> = ({ children }) => {
    
    const modal:HTMLElement = document.getElementById('portal') || new HTMLDivElement();

    return ReactDOM.createPortal(
        <Container>
            <Content>
               
                {children}
            
            </Content>
        </Container>,
        modal

    );

}

export default Portal;
