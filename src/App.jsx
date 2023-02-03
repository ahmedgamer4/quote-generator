import React, { useEffect, useState } from "react";
import getAll from "./services/quotes";
import Quote from "./components/Quote";

const App = () => {
  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState({})
  const [status, setStatus] = useState('oneQuote')

  useEffect(() => {
    getAll().then((quotes) => { 
      setQuotes(quotes)
      setRandomQuote(quotes[0])
    })
  }, [])

  const getRandomQuote = () => {
    const i = Math.floor(Math.random() * (quotes.length - 1))
    setRandomQuote(quotes[i])
    setStatus('oneQuote')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-end">
        <button className="flex gap-2 items-center m-9 font-medium" onClick={getRandomQuote}>
          <p>random</p>
          <i className="fa-solid fa-rotate"></i>
        </button>
      </header>
      <main className="flex-grow flex flex-col justify-center">
        <div>
          { status === 'oneQuote' ? <Quote quote={randomQuote} changeState={() => setStatus('allAuthorQuotes')}/> : null}
          { status === 'allAuthorQuotes' ? quotes
            .filter((q) => q.author === randomQuote.author)
            .map((q) => <Quote quote={q} key={quotes.indexOf(q) + 1} changeState={() => 0} />) : null}
        </div>
      </main>
    </div>
  );
};

export default App;
