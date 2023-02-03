import React from "react"
import PropTypes from 'prop-types'

const Quote = ({ quote, changeState }) => {
  return (
    <div className="flex-col items-center max-w-lg mx-auto mb-6">
      <div className="flex gap-3 mb-9">
        <div className="w-2 bg-yellow-500"></div>
        <h1 className="text-3xl sm:text-4xl text-gray-800">{ quote.text }</h1>
      </div>
      <button onClick={changeState}
       className="flex w-full items-center gap-4 transition-colors hover:bg-gray-700 hover:text-white px-6 py-4 font-medium text-gray-800 text-xl">
        <p>{ quote.author }</p>
        <i className="fa-solid text-white fa-arrow-right"></i>
      </button>
    </div>
  )
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  changeState: PropTypes.func.isRequired
}

export default Quote