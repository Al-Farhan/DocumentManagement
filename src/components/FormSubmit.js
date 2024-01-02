import React, {useState} from 'react'

const FormSubmit = () => {

  const [username, setUsername] = useState('')

  const handleSubmit = async () => {
    const apiUrl = 'http://127.0.0.1:8000/onsubmitform/'

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username
        })
      })

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
    } else {
        console.error('Failed to submit form');
    }
    }
    catch (error) {
      console.error('Error submitting form:', error.message);
    }
  }

  return (
    <>
      <div>FormSubmit Page</div>
      <form method='POST' action='/onsubmitform' onSubmit={handleSubmit}>
        <label htmlFor='username'> Enter username: </label>
        <input type='text' name='username' id='username' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default FormSubmit