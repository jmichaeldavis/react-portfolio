import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProjectBox = styled.div`
width: 50%;
height: 10 rem;
border-radius: 25px;
background-color: gray;
`
export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  color: black;
`;

export const ProjectImage = styled.img`
  width: 50%;
`;
export const GitHubIcon = styled.img`
  width: 1 rem;
  height: 1 rem;
`