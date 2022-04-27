const {gql} = require('apollo-server');

const typeDefs = gql`
    """
    The Query type is defined like any other object type
    it references types created in the schema below
    """
    type Query {
    "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    #Schema definitions go here:

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
    # Fields go here
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
    # Fields go here
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;