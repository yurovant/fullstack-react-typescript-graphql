import {
  ListItem,
  useGetListQuery,
  ListItemId,
  useGetListIdQuery,
} from './gql/generated/graphql'

export function App() {
  // const { loading, error, data } = useGetListQuery();
  const listResponse = useGetListQuery()
  const listIdResponse = useGetListIdQuery()

  console.warn('listResponse', listResponse)
  console.warn('listIdResponse', listResponse)

  const list = listResponse.data?.list
  const listId = listIdResponse.data?.list

  return (
    <>
      <h1>React + TypeScript + GraphQL</h1>

      <h2>List</h2>
      <div>
        <ul>
          {list &&
            list.length &&
            list.map(({ id, name, category }: ListItem) => (
              <li key={id}>
                {name} - {category.name} - {category.id}
              </li>
            ))}
        </ul>
      </div>

      <h2>List ID</h2>
      <div>
        <ul>
          {listId &&
            listId.length &&
            listId.map(({ id }: ListItemId) => <li key={id}>ID - {id}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
