import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('http://localhost:3000/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
      setSummarizedText(data.summarizedText);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header_text">
          Text<span className="text_active">Summarize</span>
        </h1>
        <br />
        <h2 className="header_summary">Summarise your text into a shorter length.</h2>
      </div>
      <div className="text_form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="textInput" className="form-label">
              Enter your text
            </label>
            <textarea
              className="form-control"
              id="textInput"
              rows={10}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {loading ? 'Loading...' : 'Summarize'}
          </button>
        </form>
      </div>
      <div className="summarized_text">
        <label htmlFor="summarizedText" className="form-label">
          Summarized text
        </label>
        <textarea
          className="form-control"
          id="summarizedText"
          rows={10}
          value={summarizedText}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
