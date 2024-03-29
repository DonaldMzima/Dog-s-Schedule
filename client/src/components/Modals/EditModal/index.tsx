import React from 'react'
import { EditSchedules } from 'utilis/https'
import { UserDataTypes } from 'utilis/types'
import { Box, Button } from '@chakra-ui/react'

type EditButtonType = {
  userData: UserDataTypes
  id: string
}

const EditButton = (props: EditButtonType) => {
  return (
    <>
      <Box marginTop="-26px" marginLeft="208px">
        <Button
          bg="#1f1f1a"
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
