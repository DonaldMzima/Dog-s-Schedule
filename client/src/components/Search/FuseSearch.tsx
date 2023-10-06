// FuseSearch.js
import React, { useState } from 'react'
import Fuse from 'fuse.js'

const FuseSearch = ({ data, keysToSearch }: any) => {
  const [query, updateQuery] = useState('')

  // Create a Fuse instance
  const fuse = new Fuse(data || [], {
    keys: keysToSearch,
    includeScore: true,
  })

  // Perform the search and get the results
  const results = fuse.search(query)

  // Filter the data based on search results
  const filteredData = query ? results.map((result) => result.item) : data || []

  function onSearch({ currentTarget }: any) {
    updateQuery(currentTarget.value)
  }

  return {
    query,
    filteredData,
    onSearch,
  }
}

export default FuseSearch
