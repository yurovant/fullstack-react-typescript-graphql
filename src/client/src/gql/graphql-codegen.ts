import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/graphql',
  documents: ['./**/*.tsx', './**/*.graphql'],
  generates: {
    'src/gql/generated/': {
      preset: 'client',
    },
    'src/gql/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/gql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
}

export default config
