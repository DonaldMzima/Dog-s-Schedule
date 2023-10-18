//walkSchedules types in the contact page
export type attributesType = {
  person: string
  dog: string
  date: Date | string
  isCompleted?: boolean | any
  createdAt?: Date
  publishedAt?: Date
  updatedAt?: Date
}

export type EditButtonType = {
  userData?: UserDataTypes
  id: any

  attribute: attributesType
}

export type SchedulesTypes = {
  id: number
  attributes: attributesType
}

export type UserDataTypes = {
  person: string
  dog: string
  date: any
  isCompleted?: boolean
}

export type MyIdType = {
  id: number | string
}

export type CustomSpinnerType = {
  text: string
}

export type FormType = {
  person: string
  dog: string
  date: string | Date
  isCompleted?: boolean | any
}
