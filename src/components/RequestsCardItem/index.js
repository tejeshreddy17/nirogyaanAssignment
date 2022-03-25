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

const RequestCard = props => {
  const {request, approvingRequest, approvingLoadingStatus} = props
  const {
    commentsCount,
    postContent,
    postId,

    reactions,
    title,
    postedBy,
    approvedStatus,
  } = request
  const {profilePic, userId, username} = postedBy
  const {reactionsCount} = reactions

  const onApproving = () => {
    approvingRequest(userId, postId)
  }

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
        {approvingLoadingStatus ? (
          <CardButton onClick={onApproving}>
            <Loader type="TailSpin" color="#ffffff" height={20} width={20} />
          </CardButton>
        ) : (
          <CardButton onClick={onApproving}>
            {approvedStatus ? 'Approved' : 'Approve'}
          </CardButton>
        )}
      </ProfilePicButtonContainer>
    </CardContainer>
  )
}

export default RequestCard
