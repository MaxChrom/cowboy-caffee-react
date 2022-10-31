import { useState } from "react"
import ReactDOM from "react-dom/client"

function Form() {
  const [form, setForm] = useState(0)
  function handleClick(event) {
    event.preventDefault()
    const data = new FormData(event.target)

    fetch(
      "http://www.cbp-exercises.test/cowboy_cafe_react/cowboy-coffee-shop/src/database/submit.php",
      {
        method: "POST",
        mode: "cors",
        body: data,
      }
    )

    setForm(1)
  }

  return form == 0 ? (
    <form onSubmit={handleClick}>
      <label for='fname'>FIRST NAME</label>
      <input type='text' id='fname' name='firstname' placeholder='Your name' />

      <label for='lname'>LAST NAME</label>
      <input
        type='text'
        id='lname'
        name='lastname'
        placeholder='Your last name'
      />

      <label for='lname'>E-MAIL ADDRESS</label>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='Your e-mail address'
      />

      <label for='subject'>SUBJECT</label>

      <textarea
        id='subject'
        name='subject'
        placeholder='Your message'
      ></textarea>
      {/* height:200px */}
      <input type='Submit' name='Submit' />
    </form>
  ) : (
    <p className='formSubmitted'>Thank you! We will contact you soon!</p>
  )
}

export default Form
