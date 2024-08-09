const typeDefs = `
  # Define the Book type based on the bookSchema
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  # Define the User type
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  # Define the Query type
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  # Define the Mutation type for creating and updating users
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
    removeBook(bookId: String!): User
  }

  # Define the Auth type to handle authentication responses
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;