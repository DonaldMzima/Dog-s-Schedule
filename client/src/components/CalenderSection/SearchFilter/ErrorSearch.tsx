/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const SearchError = ({ query, updateQuery }: any) => {
  return (
    <div>
      <p>No results found for "{query}". Try a different search term.</p>
      <input
        type="text"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchError
