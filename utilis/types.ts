//walkSchedules types in the contact page
type attributesType = {
  person: string
  dog: string
  date: string
  createdAt: Date
  publishedAt: Date
  updatedAt: Date
}

export type SchedulesTypes = {
  id: number
  attributes: attributesType
}
