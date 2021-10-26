import ApolloClient from 'apollo-boost'

const Client = new ApolloClient({
    uri: "https://graphql.anilist.co"
});

export default Client;