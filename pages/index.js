import {useRef} from 'react'

function HomePage () {
  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value
    const feedback = feedbackInputRef.current.value

  }
  
	return (
		<div>
			<h1>The Home Page</h1>
			<form>
				<div>
				<label htmlFor='email'>Your Email address</label>
        <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your FeedBack</label>
          <textarea id="feedback" rows="4" ref={feedbackInputRef}></textarea>
        </div>
			</form>
		</div>
	);
}

export default HomePage;
