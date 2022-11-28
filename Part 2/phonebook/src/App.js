import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./componentsPersons";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const fetchPersons = () => {
    personService.getAll().then((response) => setPersons(response.data));
  };

  useEffect(() => {
    // Fetch persons data from the database
    fetchPersons();
  });

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: Math.max(persons.map((person) => person.id)) + 1,
        })
      );
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const fields = [
    { title: "name:", value: newName, action: handleNameChange },
    { title: "number:", value: newNumber, action: handleNumberChange },
  ];

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} action={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm submitAction={addPerson} fields={fields} submitText="Add" />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
