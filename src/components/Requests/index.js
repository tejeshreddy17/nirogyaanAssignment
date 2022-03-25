import {Component} from 'react'

import RequestCard from '../RequestsCardItem'

import {
  RequestPageAppBackground,
  RequestCardsContainer,
  RequestsAndHeaderContainer,
} from './styledComponents'

import SideBar from '../SideBar'

import Header from '../RequestHeader'

class RequestPage extends Component {
  state = {requests: []}

  componentDidMount() {
    this.gettingDetails()
  }

  gettingDetails = async () => {
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()

    const formattedData = data.map(eachData => ({
      commentsCount: eachData.comments_count,
      postContent: eachData.post_content,
      postId: eachData.post_id,
      postedAt: eachData.posted_at,
      reactions: {reactionsCount: eachData.reactions.reactions_count},
      title: eachData.title,
      postedBy: {
        profilePic: eachData.posted_by.profile_pic,
        userId: eachData.posted_by.user_id,
        username: eachData.posted_by.username,
      },
      tags: eachData.tags.map(eachTag => ({
        tagId: eachTag.tag_id,
        tagName: eachTag.tag_name,
      })),
    }))
    console.log(formattedData)
    if (response.ok === true) {
      this.setState({requests: formattedData})
    }
  }

  render() {
    const {requests} = this.state
    return (
      <RequestPageAppBackground>
        <SideBar />
        <RequestsAndHeaderContainer>
          <Header />
          <RequestCardsContainer>
            {requests.map(eachRequest => (
              <RequestCard key={eachRequest.postId} request={eachRequest} />
            ))}
          </RequestCardsContainer>
        </RequestsAndHeaderContainer>
      </RequestPageAppBackground>
    )
  }
}

export default RequestPage
