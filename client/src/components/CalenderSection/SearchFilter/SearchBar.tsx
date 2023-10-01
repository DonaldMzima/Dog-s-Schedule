import React, { useState } from 'react'
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react'
import { GrSearchAdvanced } from 'react-icons/gr'

const SearchBar = ({ onSearch }: any) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: { target: { value: any } }) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <InputGroup>
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
      <InputRightElement>
        <GrSearchAdvanced size={'1em'} />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar
