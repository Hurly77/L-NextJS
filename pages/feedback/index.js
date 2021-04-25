import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import { useState, Fragment } from 'react';

const FeedbackPage = (props) => {
  const [ feedbackData, setFeedbackData ] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data));
  };

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.feedback.email}</p>}
      {console.log(feedbackData, feedbackData ? feedbackData.feedback.email : null)}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
};

export default FeedbackPage;
