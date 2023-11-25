// import { gql, useMutation } from '@apollo/client'
// import { toast } from 'react-hot-toast'

// const UPDATE_USER_MUTATION = gql`
//   mutation($id: uuid!, $displayName: String!, $metadata: jsonb) {
//     updateUser(
//       pk_columns: { id: $id }
//       _set: { displayName: $displayName, metadata: $metadata }
//     ) {
//       id
//       displayName
//       metadata
//     }
//   }
// `

// const Profile = () => {
//   const [mutateUser, { loading: updatingProfile }] = useMutation(
//     UPDATE_USER_MUTATION,
//   )

//   const updateUserProfile = async (e: any) => {
//     e.preventDefault()

//     try {
//       await mutateUser({
//         variables: {
//           id: user.id,
//           displayName: `${firstName} ${lastName}`.trim(),
//           metadata: {
//             firstName,
//             lastName,
//           },
//         },
//       })
//       toast.success('Updated successfully', { id: 'updateProfile' })
//     } catch (error) {
//       toast.error('Unable to update profile', { id: 'updateProfile' })
//     }
//   }
// }
