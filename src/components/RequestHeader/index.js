import {AiOutlineSearch} from 'react-icons/ai'

import {
  HeaderContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  PostButton,
  ProfilePic,
  PostButtonProfilePicContainer,
  HeaderLogo,
} from './styledComponents'

import './index.css'

const Header = props => {
  const {logo, text} = props
  return (
    <HeaderContainer>
      {!logo && (
        <SearchBarContainer>
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>

          <SearchInput placeholder="Search" />
        </SearchBarContainer>
      )}
      {logo && (
        <HeaderLogo
          alt="website Logo"
          src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216918/logo_3x_khkcuf.png"
        />
      )}
      <PostButtonProfilePicContainer>
        <PostButton>Write Post</PostButton>
        <ProfilePic
          alt="profilePic"
          src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216306/M_3x_czanvx.png"
        />
      </PostButtonProfilePicContainer>
    </HeaderContainer>
  )
}

export default Header
