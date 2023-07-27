import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;

export const ProjectBox = styled.div`
width: 50rem;
height:  25%;
border-radius: 25px;
background-color: white;
flex: wrap;
margin: 1rem 1rem 1rem 1rem;
display: flex;
flex-direction: column;
align-items: center;
border: 3px solid black;
`

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  color: black;
  padding: 1rem;
`;

export const ProjectImage = styled.img`
  width: 50%;
`;

export const DeployedLinkButton = styled.button`
  color: white;
  background-color: black;
  font-size: large;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 2rem;
  box-sizing: border-box;
  &:hover {
  color: black;
  background-color: white;
  border: 3px solid black;
  }
`
