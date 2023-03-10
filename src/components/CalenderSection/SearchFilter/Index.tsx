/* eslint-disable react/no-children-prop */
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { GrSearchAdvanced } from 'react-icons/gr'

function Search() {
  return (
    <Stack size={5}>
      <InputGroup>
        <InputLeftElement children={<GrSearchAdvanced size={'1em'} />} />
        <Input type="text" htmlSize={4} width="auto" />
      </InputGroup>
    </Stack>
  )
}

export default Search
