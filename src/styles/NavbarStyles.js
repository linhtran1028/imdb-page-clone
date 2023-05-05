import styled from "styled-components";

export const Nav = styled.div`
  background: white;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  margin: auto;
  padding: 15px 0;
`;

export const NavMenu = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  color: #808080;
`;

export const NavMenuItems = styled.div`
&:hover {
  color: #808080;;
},
`;

export const SearchBarCont = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 30px;
`;

export const SearchInput = styled.input`
  background: #F5F5F5;
  height: 2vh;
  width:200px;
  border:none;
  &:focus {
    outline:none;
  },
`;

export const HeaderPage = styled.div`
	font-family: "Poppins", sans-serif;
	text-decoration-line: none;
`;

export const NavContent = styled.div`
  display: flex;
  width: 86rem;
  margin: auto;
  justify-content: space-between
`