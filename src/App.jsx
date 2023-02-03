import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [parentName, setParentName] = useState('')
  const [parentNumber, setParentNumber] = useState('')
  const [emergencyNumber, setEmergencyNumber] = useState('')
  const [rel2Student, setRel2Student] = useState('')

  const [error, setError] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const isValid = () => {
    if (name === '' || email === '' || phone === '' || city === '' || parentName === '' || parentNumber === '' || emergencyNumber === '' || rel2Student === '') {
      setError("All Fields Mandatory")
      return false;
    }
    if (!name.match(/([a-zA-Z]+( [a-zA-Z]+)+)/)) {
      setError("Full Name Should be More than 2 Words")
      return false;
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("This is not an Email.")
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setError("Phone Number Should be only Numeric and of 10 Digits ")
      return false;
    }
    if (!city.match(/[a-zA-Z]/)) {
      setError("City Name Cannot be Number")
      return false;
    }
    if (!parentName.match(/([a-zA-Z]+( [a-zA-Z]+)+)/)) {
      setError("Parent/Guardian Name Cannot be Numbers")
      return false;
    }
    if (!parentNumber.match(/[0-9]/)) {
      setError("Parent's/Guardian's Number Can only be Numeric Digits")
      return false
    }
    if (parentNumber.length != 10) {
      setError("Parent's/Guardian's Number Should be of 10 Digits")
      return false
    }
    if (!emergencyNumber.match(/^[0-9]{10}$/)) {
      setError("Emergency Number Can Only be Numeric and 10 Digits")
      return false;
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    let isFormValid = isValid();
    if (isFormValid) {
      setIsSubmit(true)
    }
  }

  return (
    <div className="App">
      {
        !isSubmit &&
        <>
          <h1>School Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='error'>
              {error}
            </div>
            <div className="form-group">
              <label>Full Name: </label>
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="form-group">
              <label>Email: </label>
              <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="form-group">
              <label>Phone Number: </label>
              <input type="text" name="" id="" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>

            <div className="form-group">
              <label>City: </label>
              <input type="text" name="" id="" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>

            <div className="form-group">
              <label>Parent/Guardian Name: </label>
              <input type="text" name="" id="" onChange={(e) => setParentName(e.target.value)} value={parentName} />
            </div>

            <div className="form-group">
              <label>Parent/Guardian Number: </label>
              <input type="text" name="" id="" onChange={(e) => setParentNumber(e.target.value)} value={parentNumber} />
            </div>

            <div className="form-group">
              <label>Emergency Number: </label>
              <input type="text" name="" id="" onChange={(e) => setEmergencyNumber(e.target.value)} value={emergencyNumber} />
            </div>

            <div className="form-group">
              <label>Relation to Student: </label>
              <input type="text" name="" id="" onChange={(e) => setRel2Student(e.target.value)} value={rel2Student} />
            </div>

            <button type="submit" className='btn-submit'>Submit</button>
          </form>
        </>
      }

      {isSubmit && <>
        <h1>Form Submitted</h1>
        <div className="data-group">
          <label>Full Name: </label>
          <p>{name}</p>
        </div>

        <div className="data-group">
          <label>Email: </label>
          <p>{email}</p>
        </div>

        <div className="data-group">
          <label>Phone Number: </label>
          <p>{phone}</p>
        </div>

        <div className="data-group">
          <label>City: </label>
          <p>{city}</p>
        </div>

        <div className="data-group">
          <label>Parent/Guardian Name: </label>
          <p>{parentName}</p>
        </div>

        <div className="data-group">
          <label>Parent/Guardian Number: </label>
          <p>{parentNumber}</p>
        </div>

        <div className="data-group">
          <label>Emergency Number: </label>
          <p>{emergencyNumber}</p>
        </div>

        <div className="data-group">
          <label>Relation to Student: </label>
          <p>{rel2Student}</p>
        </div>

        <button onClick={(e) => setIsSubmit(false)}>New Form</button>

      </>}
    </div>
  )
}

export default App;
