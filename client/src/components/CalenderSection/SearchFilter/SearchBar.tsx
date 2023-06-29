import React, { useState } from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { GrSearchAdvanced } from 'react-icons/gr'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <InputGroup>
      <InputLeftElement>
        <GrSearchAdvanced size={'1em'} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="search"
        id="query"
        value={query}
        onChange={handleSearch}
        htmlSize={7}
        width="auto"
        boxShadow="0 0 6px grey"
      />
    </InputGroup>
  )
}

export default SearchBar
