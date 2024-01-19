import styled from 'styled-components'

export const Navbar = styled.div`
  height: 12vh;
  display: flex;
  width: 100vw;
  margin: 0px;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  margin-bottom: 0px;
  box-sizing: border-box;
`
export const NavImg = styled.img`
  height: 35px;
`
export const Navlist = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Li = styled.li`
  display: flex;
  margin-right: 15px;
`
export const ToggleButton = styled.button`
  border: 0px none;
  background-color: transparent;
  height: 500px;
  font-size: 10px;
`
export const ProfileImage = styled.img`
  width: 35px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid;
  color: ${props => props.color};
  border-radius: 4px;
  padding: 5px 10px;
`
export const PopDiv = styled.div`
  height: 100%;
  width: 300px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 20px 30px;
  align-content: center;
  flex-direction: column;
  background-color: #231f20;
`
export const ModalPara = styled.p`
  color: #ffffff;
  margin-bottom: 30px;
`
export const ModalBtnDiv = styled.div`
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-between;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid;
  padding: 5px 10px;
  color: #cccccc;
  border-radius: 3px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  padding: 5px 10px;
  color: #ffffff;
  border-radius: 4px;
`
