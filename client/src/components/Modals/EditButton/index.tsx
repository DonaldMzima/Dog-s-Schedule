import { Box, Button } from '@chakra-ui/react'

import React from 'react'
import { EditSchedules } from 'utilis/https'

type EditButtonType = {
  userData: any
}

const EditButton = (props: EditButtonType) => {
  return (
    <>
      <Box marginTop="-26px" marginLeft="208px">
        <Button
          bg="grey"
          color="white"
          size="xs"
          onClick={() => EditSchedules(props.userData)}
        >
          Edit
        </Button>
      </Box>
    </>
  )
}

export default EditButton
