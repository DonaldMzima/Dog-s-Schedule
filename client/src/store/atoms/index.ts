import { atom } from 'recoil'
import { Schedule } from 'utilis/https'

const schedulesState = atom<Array<unknown>>({
  key: 'walkSchedule', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
})

const deleteScheduleModal = atom<boolean>({
  key: 'deleteScheduleModal',
  default: false,
})

const updateScheduleModal = atom<boolean>({
  key: 'updateScheduleModal',
  default: false,
})

const scheduleData = atom<null | Schedule>({
  key: 'scheduleData',
  default: null,
})

const StorageState = atom<Array<unknown>>({
  key: 'myStorage',
  default: [],
})

export const showCompletedState = atom({
  key: 'showCompletedState',
  default: false,
})

export {
  StorageState,
  schedulesState,
  deleteScheduleModal,
  scheduleData,
  updateScheduleModal,
}
