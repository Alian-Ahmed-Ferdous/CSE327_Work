import "./styles.css";
import { useState } from "react";
import { Grid, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function App() {
  const [textQuestionList, setTextQuestionList] = useState([]);

  const CreateTextQuestion = () => {
    setTextQuestionList([
      ...textQuestionList,
      { textQuestion: "", textAnswer: "" }
    ]);
    console.log(textQuestionList[0]);
  };

  const handleTextQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...textQuestionList];
    list[index][name] = value;
    setTextQuestionList(list);
  };

  const handleTextQuestionRemove = (index) => {
    const list = [...textQuestionList];
    list.splice(index, 1);
    setTextQuestionList(list);
  };

  const [audioQuestionList, setAudioQuestionList] = useState([]);

  const CreateAudioQuestion = () => {
    setAudioQuestionList([
      ...audioQuestionList,
      { audioQuestion: "", audioAnswer: "" }
    ]);
    console.log(audioQuestionList[0]);
  };

  const handleAudioQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...audioQuestionList];
    list[index][name] = value;
    setAudioQuestionList(list);
  };

  const handleAudioQuestionRemove = (index) => {
    const list = [...audioQuestionList];
    list.splice(index, 1);
    setAudioQuestionList(list);
  };

  return (
    <div>
      {textQuestionList.map((singleTextQuestion, index) => (
        <Stack spacing={2} marginY={2} key={index}>
          <Grid>
            <TextField
              name="textQuestion"
              id="textQuestion outlined-basic"
              label="Question"
              variant="outlined"
              value={singleTextQuestion.textQuestion}
              onChange={(e) => handleTextQuestionChange(e, index)}
              required
            />
          </Grid>
          <Grid>
            <TextField
              name="textAnswer"
              id="textAnswer outlined-basic"
              label="Answer"
              variant="outlined"
              value={singleTextQuestion.textAnswer}
              onChange={(e) => handleTextQuestionChange(e, index)}
              required
            />
          </Grid>
          <Grid>
            <Button className="button" onClick={handleTextQuestionRemove}>
              Remove
            </Button>
          </Grid>
        </Stack>
      ))}
      {audioQuestionList.map((singleAudioQuestion, index) => (
        <Stack spacing={2} marginY={2} key={index}>
          <Grid>
            <TextField
              name="audioQuestion"
              id="audioQuestion outlined-basic"
              label="Question"
              variant="outlined"
              value={singleAudioQuestion.audioQuestion}
              onChange={(e) => handleAudioQuestionChange(e, index)}
              required
            />
          </Grid>
          <Grid>
            <TextField
              name="audioAnswer"
              id="audioAnswer outlined-basic"
              label="Answer"
              variant="outlined"
              value={singleAudioQuestion.audioAnswer}
              onChange={(e) => handleAudioQuestionChange(e, index)}
              required
            />
          </Grid>
          <Grid>
            <Button className="button" onClick={handleAudioQuestionRemove}>
              Remove
            </Button>
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
          <Button
            className="button"
            variant="outlined"
            onClick={CreateAudioQuestion}
          >
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
