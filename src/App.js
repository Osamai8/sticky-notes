import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Cards from "./components/Cards";
import FormDialog from "./components/Popup";
import { Container, Grid, Typography } from "@material-ui/core";

const App = () => {
  const [notes, setNotes] = useState([]);
  // change the color of cards
  const color = ["#F2F2F2", "#fff", "smokewhite"];

  const addNoteHandler = (title, description) => {
    console.log(title);
    const newNote = {
      id: Math.random(),
      title: title,
      description: description
    };
    const newNOteData = notes.concat(newNote);
    setNotes(newNOteData);
  };
  const deleteNoteHandler = (id) => {
    console.log("asfas", id);
    setNotes(notes.filter((item) => item.id !== id));
  };
  return (
    <StyledDiv>
      <div className="glass">
        <Header />
        <Container>
          <Grid container spacing={3}>
            {notes.length === 0 ? (
              <div style={{ width: "100%", paddingTop: 200 }}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: "center", fontFamily: "Caveat" }}
                >
                  Start sticking your notes here..
                </Typography>
              </div>
            ) : (
              notes.map((item) => {
                return (
                  <Grid item md={4} sm={6} xs={12} key={item.id}>
                    <Cards
                      color={color}
                      item={item}
                      deleteNoteHandler={deleteNoteHandler}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
          <FormDialog onSubmit={addNoteHandler} />
        </Container>
      </div>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right bottom, #4cb8c4, #3cd3ad);
  display: flex;
  align-items: center;
  justify-content: center;
  .glass {
    background: white;
    min-height: 80vh;
    max-height: 90vh;
    width: 70%;
    min-width: 100vh;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.2)
    );
    border-radius: 1rem;
    z-index: 4;
    backdrop-filter: blur(2rem);
  }
`;

export default App;
