const gql = require ("graphql-tag");

const typeDefs = gql`
" Uma trilha é um grupo de Módulos que ensina sobre um tema específico. Obter matriz de types para grade da página inicial "
  type Query {
    tracksForHome: [Track!]!
  }
  " Uma track é um grupo de Módulos que ensina sobre um tema específico "
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  " Autor de uma type completa ou de um módulo "
  type Author {
    id: ID!
    name: String!
    photo: String
  }
` ;

module.exports = typeDefs;