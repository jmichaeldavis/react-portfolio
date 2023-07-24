import styled from 'styled-components';

export const NavBarContainer = styled.div`
width: 100%;
height: 5rem;
display: flex
justify-content: space-around;
flex-direction: column;
align-items: center;
`

export const NavBarOptions = styled.button`
flex: 1 1 auto;
margin: 10px;
padding: 15px;
font-size: 1rem;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;
box-shadow: 0 0 20px #eee;
border-radius: 10px;

&:hover {
background-position: right center;}
background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
`
