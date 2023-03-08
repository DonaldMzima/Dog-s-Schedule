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

const CreateWalkSchedules = async (data: any) => {
  try {
    const Schedules = await axios.post(
      `${'http://localhost:1337/api/schedules'}`,
    )
    return Schedules
  } catch (error) {
    error
  }
}

export { WalkSchedules, CreateWalkSchedules }
