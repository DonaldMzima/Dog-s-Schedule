import { gql, ApolloQueryResult } from '@apollo/client'
import client from 'apolloClient'

// Define types for your data
export interface Schedule {
  id: string
  person: string
  dog: string
  date: string
}

interface UserDataTypes {
  person: string
  dog: string
  date: string
}

interface DeleteResult {
  id: string
}

const GET_WALK_SCHEDULES = gql`
  query GET_WALK_SCHEDULES {
    schedules {
      person
      dog
      date
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
  ) {
    update_schedules_by_pk(
      pk_columns: { id: $id }
      _set: { person: $person, dog: $dog, date: $date }
    ) {
      id
      person
      dog
      date
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
    const { data }: any = await client.mutate({
      mutation: CREATE_WALK_SCHEDULE,
      variables: {
        person: userData.person,
        dog: userData.dog,
        date: userData.date,
      },
    })
    return data.insert_schedules_one
  } catch (error) {
    throw new Error(error as string)
  }
}

const DeleteSchedules = async (id: string): Promise<DeleteResult> => {
  try {
    const { data }: any = await client.mutate({
      mutation: DELETE_SCHEDULE,
      variables: {
        id,
      },
    })

    return data.delete_schedules_by_pk
  } catch (error) {
    throw new Error(error as string)
  }
}

const EditSchedules = async (
  userData: UserDataTypes,
  id: string,
): Promise<Schedule> => {
  try {
    const { data }: any = await client.mutate({
      mutation: EDIT_SCHEDULE,
      variables: {
        id,
        person: userData.person,
        dog: userData.dog,
        date: userData.date,
      },
    })

    return data.update_schedules_by_pk
  } catch (error) {
    throw new Error(error as string)
  }
}

export { WalkSchedules, CreateWalkSchedules, DeleteSchedules, EditSchedules }
