import { useRef } from 'react';

function HomePage () {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const inputEmail = emailInputRef.current.value;
    const inputFeedback = feedbackInputRef.current.value;
    console.log(inputEmail, inputFeedback)

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({ email: inputEmail, feedback: inputFeedback }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch('/api/feedback')
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your FeedBack</label>
          <textarea id='feedback' rows='4' ref={feedbackInputRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
    </div>
  );
}

export default HomePage;
