import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 75px;
  max-height: 80px;
  flex-grow: 1;
  border-bottom: 1px solid #d7dfe9;
  width: 100%;
  flex-shrink: 0;
  padding-left: 25px;
  background-color: white;
`
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #d7dfe9;
  height: 45px;
  width: 550px;
  padding-left: 15px;
`
export const SearchInput = styled.input`
  border: none;
  align-self: stretch;
  border-radius: 8px;
  flex-grow: 1;
  outline: none;
  margin-left: 15px;
`
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostButtonProfilePicContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`
export const PostButton = styled.button`
  height: 45px;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #0b69ff;
  border: none;
  color: white;
  font-size: 16px;
  font-family: HK Grotesk;
  font-weight: 500;
  margin-right: 35px;
  cursor: pointer;
`
export const ProfilePic = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`

export const HeaderLogo = styled.img`
  height: 48px;
`

export const ObservationPageHeading = styled.h1`
  font-family: HK Grotesk;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #171f46;
  margin-left: 44px;
`
