// import { Text } from '@chakra-ui/react'

// function ResponsiveNav() {
//   const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
//     '(min-width: 1920px)',
//     '(display-mode: browser)',
//   ])

//   function determineText() {
//     if (isLargerThanHD) {
//       return `high resolution you got there ${
//         isDisplayingInBrowser ? 'in your browser' : 'on your screen'
//       }`
//     }

//     return isDisplayingInBrowser
//       ? 'rendering in a browser'
//       : 'rendering on something else, e.g. PWA'
//   }

//   return <Text>{determineText()}</Text>
// }

// export default ResponsiveNav