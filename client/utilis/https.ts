import axios from 'axios'

const WalkSchedules = async () => {
  try {
    const Schedules = await axios.get(
      `${'http://localhost:1337/api/schedules'}`,
    )
    return Schedules
  } catch (error) {
    throw new Error(error as string)
  }
}

const CreateWalkSchedules = async (userData: {
  person: string
  dog: string
  date: string
}) => {
  console.log('getdata', userData)
  try {
    const { data }: any = await axios.post(
      'http://localhost:1337/api/schedules',
      {
        data: {
          person: userData.person,
          dog: userData.dog,
          date: userData.date,
        },
      },
    )
    return data
  } catch (error) {
    throw new Error(error as string)
  }
}

// const DeleteSchedules = async (id: number) => {
//   console.log('this this daaaaataa', id)
//   try {
//     const Schedules = await axios.delete(
//       `http://localhost:1337/api/schedules/${id}`,
//     )

//     return Schedules
//   } catch (error) {
//     error
//   }
// }

const DeleteSchedules = async (id: number) => {
  console.log('this this daaaaataa', id)
  try {
    const Schedules = await axios.delete(
      `http://localhost:1337/api/schedules/${id}`,
    )

    if (!Schedules.data) {
      throw new Error('No data found in response.')
    }

    return Schedules
  } catch (error) {
    throw new Error(error as string)
  }
}

const EditSchedules = async (userData: {
  person: string
  dog: string
  date: string
}) => {
  console.log('edit data', userData)
  try {
    const { data }: any = await axios.put(
      `http://localhost:1337/api/schedules`,
      {
        data: {
          person: userData.person,
          dog: userData.dog,
          date: userData.date,
        },
      },
    )

    return data
  } catch (error) {
    throw new Error(error as string)
  }
}

export { WalkSchedules, CreateWalkSchedules, DeleteSchedules, EditSchedules }
