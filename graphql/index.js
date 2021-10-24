import ApolloClient from 'apollo-boost'

const Client = new ApolloClient({
    uri: "https://anilist.co/graphiql"
});

export default Client;