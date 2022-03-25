import {Component} from 'react'

import {
  SidebarContainer,
  SideBarLogo,
  SideBarHeadings,
  SideBarLabels,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <SidebarContainer>
        <SideBarLogo
          alt="website Logo"
          src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648216918/logo_3x_khkcuf.png"
        />
        <SideBarHeadings>ALL DOMAINS</SideBarHeadings>
        <SideBarHeadings>FOLLOWING DOMAINS</SideBarHeadings>
        <SideBarLabels>Vido Editing</SideBarLabels>
        <SideBarLabels>3D Animation</SideBarLabels>
        <SideBarLabels background>UI/UX designers</SideBarLabels>
        <SideBarLabels>See All</SideBarLabels>
        <SideBarHeadings>SUGGEST DOMAINS</SideBarHeadings>
        <SideBarLabels>Javascript</SideBarLabels>
        <SideBarLabels>Jabong</SideBarLabels>
        <SideBarLabels>React</SideBarLabels>
        <SideBarLabels>See All</SideBarLabels>
        <SideBarHeadings>MY POSTS</SideBarHeadings>
        <SideBarHeadings>YOUR PENDINGS </SideBarHeadings>
        <SideBarHeadings color="#eaa800">PENDING FOR REVIEW</SideBarHeadings>
        <SideBarHeadings color="#eaa800">REQUESTS</SideBarHeadings>
      </SidebarContainer>
    )
  }
}

export default SideBar
