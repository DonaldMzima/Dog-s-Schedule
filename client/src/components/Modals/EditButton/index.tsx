import { Box, Button } from '@chakra-ui/react'

import React from 'react'
import { EditSchedules } from 'utilis/https'
import { MyIdType, UserDataTypes } from 'utilis/types'

type EditButtonType = {
  userData: UserDataTypes
  id: string
}

const EditButton = (props: EditButtonType) => {
  return (
    <>
      <Box marginTop="-26px" marginLeft="208px">
        <Button
          bg="grey"
          color="white"
          size="xs"
          onClick={() => EditSchedules(props.userData, props.id)}
        >
          Edit
        </Button>
      </Box>
    </>
  )
}

export default EditButton
