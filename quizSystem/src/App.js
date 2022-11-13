import "./styles.css";
import { useState } from "react";
import { Grid, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function App() {
  //To disable creating question buttons while selecting paragraph
  const [selecting, setSelecting] = useState(true);

  const [textQuestionList, setTextQuestionList] = useState([]);

  //Create text question(s) components
  const CreateTextQuestion = () => {
    setTextQuestionList([
      ...textQuestionList,
      { textQuestion: "", textAnswer: "" }
    ]);
  };

  //Handle input of text input fields of text question(s)
  const handleTextQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...textQuestionList];
    list[index][name] = value;
    setTextQuestionList(list);
  };

  //Handle submition of text question(s)
  const handleTextQuestionSubmit = (index) => {
    const list = [...textQuestionList];
    console.log(list[index]);
  };

  //Handle removable of text question(s)
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
  };

  const handleAudioQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...audioQuestionList];
    list[index][name] = value;
    setAudioQuestionList(list);
  };

  const handleAudioQuestionSubmit = (index) => {
    const list = [...audioQuestionList];
    console.log(list[index]);
  };

  const handleAudioQuestionRemove = (index) => {
    const list = [...audioQuestionList];
    list.splice(index, 1);
    setAudioQuestionList(list);
  };

  const [mcqList, setMcqList] = useState([]);

  const CreateMcqQuestion = () => {
    setMcqList([
      ...mcqList,
      {
        mcqQuestion: "",
        firstOption: "",
        secondOption: "",
        thirdOption: "",
        fouthOption: "",
        mqcAnswer: ""
      }
    ]);
  };

  const handleMcqQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...mcqList];
    list[index][name] = value;
    setMcqList(list);
  };

  const handleMcqQuestionSubmit = (index) => {
    const list = [...mcqList];
    console.log(list[index]);
  };

  const handleMcqQuestionRemove = (index) => {
    const list = [...mcqList];
    list.splice(index, 1);
    setMcqList(list);
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
            <Button
              className="button"
              onClick={(e) => handleTextQuestionSubmit(index)}
            >
              Select
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
            <Button
              className="button"
              onClick={(e) => handleAudioQuestionSubmit(index)}
            >
              Select
            </Button>
          </Grid>
        </Stack>
      ))}
      {mcqList.map((singleMcqQuestion, index) => (
        <Stack spacing={2} marginY={2} key={index}>
          <Grid>
            <TextField
              name="mcqQuestion"
              id="mcqQuestion outlined-basic"
              label="Question"
              variant="outlined"
              value={singleMcqQuestion.mcqQuestion}
              onChange={(e) => handleMcqQuestionChange(e, index)}
              required
            />
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <Grid marginRight={1} paddingBottom={1}>
                <TextField
                  name="firstOption"
                  id="firstOption outlined-basic"
                  label="A"
                  variant="outlined"
                  value={singleMcqQuestion.firstOption}
                  onChange={(e) => handleMcqQuestionChange(e, index)}
                  required
                />
              </Grid>
              <Grid marginRight={1} paddingTop={1}>
                <TextField
                  name="thirdOption"
                  id="thirdOption outlined-basic"
                  label="C"
                  variant="outlined"
                  value={singleMcqQuestion.thirdOption}
                  onChange={(e) => handleMcqQuestionChange(e, index)}
                  required
                />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid marginLeft={1} paddingBottom={1}>
                <TextField
                  name="secondOption"
                  id="secondOption outlined-basic"
                  label="B"
                  variant="outlined"
                  value={singleMcqQuestion.secondOption}
                  onChange={(e) => handleMcqQuestionChange(e, index)}
                  required
                />
              </Grid>
              <Grid marginLeft={1} paddingTop={1}>
                <TextField
                  name="fouthOption"
                  id="fouthOption outlined-basic"
                  label="D"
                  variant="outlined"
                  value={singleMcqQuestion.fouthOption}
                  onChange={(e) => handleMcqQuestionChange(e, index)}
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <FormControl>
              <InputLabel name="mqcAnswer" id="mqcAnswer">
                Answer
              </InputLabel>
              <Select
                name="mqcAnswer"
                id="mqcAnswer"
                label="mqcAnswer"
                value={singleMcqQuestion.mqcAnswer}
                onChange={(e) => handleMcqQuestionChange(e, index)}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
              </Select>
              <FormHelperText>Select the correct option</FormHelperText>
            </FormControl>
          </Grid>
          <Grid>
            <Button className="button" onClick={handleMcqQuestionRemove}>
              Remove
            </Button>
            <Button
              className="button"
              onClick={() => handleMcqQuestionSubmit(index)}
            >
              Select
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
          <Button
            className="button"
            variant="outlined"
            onClick={CreateMcqQuestion}
          >
            MCQ
          </Button>
        </Grid>
      </Stack>
    </div>
  );
}
