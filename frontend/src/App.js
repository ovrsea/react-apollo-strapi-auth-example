import React from "react";
import "./App.css";
import { AuthGate } from "./AuthGate";
import { ApolloProvider } from "@apollo/react-hooks";
import { useAppApolloClient } from "./config/apolloClient";

function App() {


  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthGate />
    </ApolloProvider>
  );
}

export default App;
