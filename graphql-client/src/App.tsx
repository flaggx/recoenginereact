import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
//import {Simulate} from "react-dom/test-utils";
//import error = Simulate.error;
import Header from "./components/Header";
import FetchInterests from "./components/FetchInterests";
import FetchUsers from "./components/FetchUsers"
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // your GraphQL Server URL,
  cache: new InMemoryCache()
});
function App() {
  return (
      <ApolloProvider client={client}>
        <Header />
          <div>
            <h2>Recommendation Engine</h2>
          <h3>List of Users</h3>
            <FetchUsers />
            <h3>User Interest Matrix</h3>
          <FetchInterests />
        </div>
        <Footer />
      </ApolloProvider>
  );
}

export default App;