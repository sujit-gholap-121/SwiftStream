import {Li, H1} from './styledComponents'

const NoteItem = props => {
  const {title, description} = props
  return (
    <Li>
      <H1>{title}</H1>
      <p>{description}</p>
    </Li>
  )
}

export default NoteItem
