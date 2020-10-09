import React from "react";
import { View } from "react-native";
import SQLite, { SQLiteDatabase } from "react-native-sqlite-storage";

import { Container, Title, Btn, BtnText } from './styles';

const App: React.FC = () => {
  let db: SQLiteDatabase;

  const connect = () => {
    db = SQLite.openDatabase(
      { name: "my.db", location: "default" },
      () => {
        console.log("Database Connected");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  return (
    <Container>
      <Title>FBS</Title>
      <Btn onPress={connect}>
        <BtnText>Click Me</BtnText>
      </Btn>
    </Container>
  );
};

export default App;
