import {AiOutlineSearch} from 'react-icons/ai'

import {
  HeaderContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  PostButton,
  ProfilePic,
  PostButtonProfilePicContainer,
} from './styledComponents'

import './index.css'

const Header = () => (
  <HeaderContainer>
    <SearchBarContainer>
      <SearchButton>
        <AiOutlineSearch />
      </SearchButton>

      <SearchInput placeholder="Search" />
    </SearchBarContainer>
    <PostButtonProfilePicContainer>
      <PostButton>Write Post</PostButton>
      <ProfilePic
        alt="profilePic"
        src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216306/M_3x_czanvx.png"
      />
    </PostButtonProfilePicContainer>
  </HeaderContainer>
)

export default Header
