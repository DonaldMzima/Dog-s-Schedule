//walkSchedules types in the contact page
export type attributesType = {
  person: string
  dog: string
  date: Date | string
  isCompleted?: boolean
  createdAt?: Date
  publishedAt?: Date
  updatedAt?: Date
}

export type EditButtonType = {
  userData?: UserDataTypes
  id: string

  attribute: attributesType
}

export type SchedulesTypes = {
  id: number
  attributes: attributesType
}

export type UserDataTypes = {
  person: string
  dog: string
  date: Date
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
  isCompleted?: boolean
}

export type MessageType = {
  message: string
}
