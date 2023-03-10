import axios from 'axios'

const WalkSchedules = async () => {
  try {
    const Schedules = await axios.get(
      `${'http://localhost:1337/api/schedules'}`,
    )
    return Schedules
  } catch (error) {
    error
  }
}

const CreateWalkSchedules = async (userData: string | number | Date | any) => {
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
    console.log('TRY ERROR:', error)
  }
}

export { WalkSchedules, CreateWalkSchedules }
