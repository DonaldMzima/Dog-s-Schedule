//walkSchedules types in the contact page
export type attributesType = {
  person: string
  dog: string
  date: string
  createdAt: Date
  publishedAt: Date
  updatedAt: Date
}

export type EditButtonType = {
  userData: UserDataTypes
  id: MyIdType

  attribute: attributesType
}

export type SchedulesTypes = {
  id: number
  attributes: attributesType
}

export type UserDataTypes = {
  person: string
  dog: string
  date: string
}

export type MyIdType = {
  id: number
}

export type CustomSpinnerType = {
  text: string
}

export type FormType = { person: string; dog: string; date: string }
