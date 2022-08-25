import { useState } from 'react'

const Filter = ({ value, action }) => {
  return (
    <div>
      filter shown with <input value={value} onChange={action} />
    </div>
  )
}

const Field = ({ title, value, action }) => {
  return (
    <div>
      {title} <input value={value} onChange={action} />
    </div>
  )
}

const PersonForm = ({ submitAction, fields, submitText }) => {
  return (
    <form onSubmit={submitAction}>
      <div>
        {fields.map(field => <Field {...field} />)}
      </div>
      <div>
        <button type="submit">{submitText}</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber, id: Math.max(persons.map(person => person.id))+1 }))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const fields = [
    { title: 'name:', value: newName, action: handleNameChange },
    { title: 'number:', value: newNumber, action: handleNumberChange }
  ]

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} action={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm submitAction={addPerson} fields={fields} submitText="Add" />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App