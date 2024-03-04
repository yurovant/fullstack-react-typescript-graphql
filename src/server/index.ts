const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

interface List {
  id: number
  name: string
  category: {
    id: number
    name: string
  }
  categoryName: string
}

interface ListId {
  id: number
}

const list: List[] = []
const listId: ListId[] = []

Array(12)
  .fill(0)
  .forEach((_, idx) =>
    list.push({
      id: idx,
      name: `Item #${idx}`,
      category: {
        id: idx,
        name: 'Name',
      },
      categoryName: `Category #${idx}`,
    })
  )

Array(12)
  .fill(0)
  .forEach((_, idx) =>
    listId.push({
      id: idx,
    })
  )

const schema = buildSchema(`
  type ListItem {
    id: Int!
    name: String!
    category: Category!
    categoryName: String! @deprecated
  }
  type ListItemId {
    id: Int!
  }
  type Category {
    id: Int!
    name: String!
  }
  type Query {
    list: [ListItem!]
  }
`)

const resolvers = {
  list: () => list,
  // listId: () => listId, // Is it needed or `list` is enough?
}

const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

const port = 8080

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
})
