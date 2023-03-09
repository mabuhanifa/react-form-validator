import { Box, Container, CssBaseline, Paper } from "@mui/material";
import "./App.css";
import StepperBox from "./components/StepperBox";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={4}>
          <StepperBox />
        </Paper>
      </Container>
    </>
  );
}

export default App;
