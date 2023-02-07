import React, { useState } from 'react'
import ReactDom from 'react-dom'

function Search() {
  return (
    <form>
      <label htmlFor="query">Search for a dog Schedule:</label>
      <input type="search" id="query" />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
