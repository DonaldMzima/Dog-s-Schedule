import { atom } from 'recoil'

const schedulesState = atom({
  key: 'walkSchedule', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
})

const StorageState = atom({
  key: 'myStorage',
  default: [],
})

export { StorageState, schedulesState }
