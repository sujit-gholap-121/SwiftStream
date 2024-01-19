import {formatDistanceToNow} from 'date-fns'
import {
  VideoCardLink,
  VideoCardLi,
  VideoCardImg,
  CardDetails,
  DetailsHead,
  ViewsContainer,
  ChannelProfileLogo,
  CardVideoDetails,
  DetailsHead1,
  ViewsPara,
} from './style'

const HomeVideoCardItem = props => {
  const {item, isDark} = props
  const {channel, id, title, publishedAt, viewCount, thumbnailUrl} = item
  const {name, profileImageUrl} = channel
  return (
    <VideoCardLink to={`/videos/${id}`}>
      <VideoCardLi
        bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
        color={isDark ? '#f1f1f1' : ' #181818'}
      >
        <VideoCardImg alt="video thumbnail_url" src={thumbnailUrl} />
        <CardDetails>
          <ChannelProfileLogo alt="channel logo" src={profileImageUrl} />
          <CardVideoDetails>
            <DetailsHead>{title}</DetailsHead>
            <DetailsHead1>{name}</DetailsHead1>
            <ViewsContainer>
              <ViewsPara>{viewCount} views</ViewsPara>
              <ViewsPara>
                {formatDistanceToNow(new Date(publishedAt))}
              </ViewsPara>
            </ViewsContainer>
          </CardVideoDetails>
        </CardDetails>
      </VideoCardLi>
    </VideoCardLink>
  )
}

export default HomeVideoCardItem
