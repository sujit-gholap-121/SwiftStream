import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem/index'
import {
  Outer,
  Show1,
  Note,
  H1,
  H2,
  Button,
  Input,
  Text,
  Img,
  Show,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [currentNote, setCurrentNote] = useState('')
  const [notes, setNote] = useState([])
  const updateTitle = e => setTitle(e.target.value)
  const updateNote = e => setCurrentNote(e.target.value)
  const addNote = e => {
    e.preventDefault()
    setNote(prev => [...prev, {id: v4(), title, currentNote}])
    setTitle('')
    setCurrentNote('')
  }
  console.log(notes)
  return (
    <Outer>
      <H2>Notes</H2>
      <Note onSubmit={addNote}>
        <Input placeholder="Title" value={title} onChange={updateTitle} />
        <Text
          value={currentNote}
          placeholder="Take a Note..."
          onChange={updateNote}
        />
        <Button type="submit">Add</Button>
      </Note>
      {notes.length === 0 ? (
        <Show1>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <H1>No Notes Yet</H1>
          <p>Notes you add will appear here</p>
        </Show1>
      ) : (
        <Show>
          {notes.map(ele => (
            <NoteItem
              key={ele.id}
              title={ele.title}
              description={ele.currentNote}
            />
          ))}
        </Show>
      )}
    </Outer>
  )
}

export default Notes
