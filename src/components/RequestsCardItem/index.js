import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  CardContainer,
  Heading,
  Description,
  ProfilePic,
  CardButton,
  ProfilePicButtonContainer,
  ProfilePicContainer,
  PostUserName,
  ReactionsIcon,
  ReactionLabelsContainer,
  LabelsContainer,
  Labels,
  ReactionIconCountContainer,
  ReactionCount,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'initial',
  success: 'success',
  failure: 'failure',
  loading: 'loading',
}

class RequestCard extends Component {
  state = {loadingStatus: apiStatusConstants.initial, approvedStatus: false}

  onApproving = async () => {
    this.setState({loadingStatus: apiStatusConstants.loading})

    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      this.setState(prevState => ({
        loadingStatus: apiStatusConstants.success,
        approvedStatus: !prevState.approvedStatus,
      }))
    }
  }

  renderingButtonUI = () => {
    const {loadingStatus, approvedStatus} = this.state
    switch (loadingStatus) {
      case apiStatusConstants.success:
        return approvedStatus ? 'Approved' : 'Approve'
      case apiStatusConstants.initial:
        return 'Approve'
      case apiStatusConstants.loading:
        return <Loader type="TailSpin" color="#ffffff" height={20} width={20} />
      default:
        return null
    }
  }

  render() {
    const {request} = this.props
    const {
      commentsCount,
      postContent,

      reactions,
      title,
      postedBy,
    } = request
    const {profilePic, username} = postedBy
    const {reactionsCount} = reactions
    return (
      <CardContainer>
        <Heading>{title.slice(0, 70)}</Heading>
        <Description>{postContent.slice(0, 70)}... </Description>
        <ReactionLabelsContainer>
          <LabelsContainer>
            <Labels backgroundColor="rgba(11, 105, 255, 0.1)" color="#0b69ff">
              uidiscuss
            </Labels>
            <Labels backgroundColor="#f3fff8" color="#2dca73">
              teamui
            </Labels>
          </LabelsContainer>
          {reactionsCount > 0 && (
            <ReactionIconCountContainer>
              <ReactionsIcon src="https://res.cloudinary.com/tejeshreddy17/image/upload/v1648167458/Icon_3x_wfomlz.png" />
              <ReactionCount>{commentsCount}</ReactionCount>
            </ReactionIconCountContainer>
          )}
        </ReactionLabelsContainer>
        <ProfilePicButtonContainer>
          <ProfilePicContainer>
            <ProfilePic src={profilePic} />
            <PostUserName>{username}</PostUserName>
          </ProfilePicContainer>
          <CardButton onClick={this.onApproving}>
            {this.renderingButtonUI()}
          </CardButton>
        </ProfilePicButtonContainer>
      </CardContainer>
    )
  }
}

export default RequestCard
