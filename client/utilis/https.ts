import { client } from '@/pages/_app'
import { ApolloQueryResult } from '@apollo/client'
import { toast } from 'react-toastify'
// import { client } from 'apolloClient'
import gql from 'graphql-tag'
// Define types for your data
export interface Schedule {
  isCompleted?: boolean
  id: string
  person: string
  dog: string
  date: string
  createdAt?: string
  publishedAt?: string
  updatedAt?: string
}

interface UserDataTypes {
  person: string
  dog: string
  date: string
  isCompleted?: boolean
}

interface DeleteResult {
  id: string
}

export const GET_WALK_SCHEDULES = gql`
  query GET_WALK_SCHEDULES {
    schedules {
      person
      dog
      date
      id
      isCompleted
      __typename
    }
  }
`

const CREATE_WALK_SCHEDULE = gql`
  mutation CreateWalkSchedule($person: String!, $dog: String!, $date: date!) {
    insert_schedules_one(object: { person: $person, dog: $dog, date: $date }) {
      person
      dog
      date
    }
  }
`

const DELETE_SCHEDULE = gql`
  mutation DeleteSchedule($id: uuid!) {
    delete_schedules_by_pk(id: $id) {
      id
    }
  }
`

const EDIT_SCHEDULE = gql`
  mutation EditSchedule(
    $id: uuid!
    $person: String!
    $dog: String!
    $date: date!
    $isCompleted: Boolean!
  ) {
    update_schedules_by_pk(
      pk_columns: { id: $id }
      _set: {
        person: $person
        dog: $dog
        date: $date
        isCompleted: $isCompleted
      }
    ) {
      id
      person
      dog
      date
      isCompleted
    }
  }
`

const WalkSchedules = async (): Promise<Schedule[]> => {
  try {
    const {
      data,
    }: ApolloQueryResult<{ schedules: Schedule[] }> = await client.query({
      query: GET_WALK_SCHEDULES,
    })
    return data.schedules
  } catch (error) {
    throw new Error(error as string)
  }
}

const CreateWalkSchedules = async (
  userData: UserDataTypes,
): Promise<Schedule> => {
  try {
    const { data }: Record<string, any> = await client.mutate({
      mutation: CREATE_WALK_SCHEDULE,
      variables: userData,
    })

    toast.success('Schedule created successfully') // Show success toast
    return data.insert_schedules_one
  } catch (error) {
    toast.error('Failed to create schedule') // Show error toast
    throw new Error(error as string)
  }
}

const DeleteSchedules = async (id: any): Promise<DeleteResult> => {
  try {
    const { data }: Record<string, any> = await client.mutate({
      mutation: DELETE_SCHEDULE,
      variables: {
        id,
      },
    })

    toast.success('Schedule deleted successfully') // Show success toast
    return data.delete_schedules_by_pk
  } catch (error) {
    toast.error('Failed to delete schedule') // Show error toast
    throw new Error(error as string)
  }
}

const EditSchedules = async (
  userData: UserDataTypes,
  id: string,
): Promise<Schedule> => {
  try {
    const { data }: Record<string, any> = await client.mutate({
      mutation: EDIT_SCHEDULE,
      variables: {
        id,
        person: userData.person,
        dog: userData.dog,
        date: userData.date,
        isCompleted: userData.isCompleted,
      },
    })

    toast.success('Schedule updated successfully') // Show success toast
    return data.update_schedules_by_pk
  } catch (error) {
    toast.error('Failed to update schedule') // Show error toast
    throw new Error(error as string)
  }
}

export { WalkSchedules, CreateWalkSchedules, DeleteSchedules, EditSchedules }
