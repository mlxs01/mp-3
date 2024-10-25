import styled from 'styled-components';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
    }
  }
`;