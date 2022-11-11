import "./styles.css";
import { useState } from "react";
import { Grid, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function App() {
  const [textQuestionList, setTextQuestionList] = useState([
    { textQuestion: "", textAnswer: "" }
  ]);

  const CreateTextQuestion = () => {};

  return (
    <div>
      {textQuestionList.map((singleTextQuestion, index) => (
        <Stack spacing={2}>
          <Grid xs>
            <TextField
              name="textQuestion"
              id="textQuestion outlined-basic"
              label="Question"
              variant="outlined"
              required
            />
          </Grid>
          <Grid xs>
            <TextField
              name="textAnswer"
              id="textAnswer outlined-basic"
              label="Answer"
              variant="outlined"
              required
            />
          </Grid>
        </Stack>
      ))}
      <Stack spacing={1}>
        <Grid xs>
          <Button
            className="button"
            variant="outlined"
            onClick={CreateTextQuestion}
          >
            Text Question
          </Button>
        </Grid>
        <Grid xs>
          <Button className="button" variant="outlined">
            Audio Question
          </Button>
        </Grid>
        <Grid xs>
          <Button className="button" variant="outlined">
            MCQ
          </Button>
        </Grid>
      </Stack>
    </div>
  );
}
