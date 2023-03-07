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

export { WalkSchedules }
