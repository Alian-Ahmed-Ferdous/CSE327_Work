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
  const [selectVisible, setSelectVisible] = useState(false);
  const [qType, setQType] = useState([]);

  function handleSelect(e, index) {
    setQType([...qType, { Type: e.target.id, Index: index }]);
    setSelectVisible(!selectVisible);
  }

  function handleSelected() {
    console.log(qType);
    if (qType[0].Type === "textQuestion") {
      const list = [...textQuestionList];
      console.log(list[qType[0].Index]);
    }
    if (qType[0].Type === "audioQuestion") {
      const list = [...audioQuestionList];
      console.log(list[qType[0].Index]);
    } else {
      const list = [...mcqList];
      console.log(list[qType[0].Index]);
    }
    setSelectVisible(!selectVisible);
    const list = [...qType];
    list.splice(0, 1);
    setQType(list);
    console.log(qType);
  }

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
    console.log(value);
    console.log(name);
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

  const handleAudioQuestionSubmit = (index) => {};

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

  const handleMcqQuestionSubmit = (index) => {};

  const handleMcqQuestionRemove = (index) => {
    const list = [...mcqList];
    list.splice(index, 1);
    setMcqList(list);
  };

  return (
    <div className="full-page">
      <div className={selectVisible ? "page-with-select" : "page"}>
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
              <Button
                className="button"
                onClick={handleTextQuestionRemove}
                disabled={selectVisible}
              >
                Remove
              </Button>
              <Button
                className="button"
                id="textQuestion"
                onClick={(e) => handleSelect(e, index)}
                disabled={selectVisible}
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
              <Button
                className="button"
                onClick={handleAudioQuestionRemove}
                disabled={selectVisible}
              >
                Remove
              </Button>
              <Button
                className="button"
                onClick={handleSelect}
                disabled={selectVisible}
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
              <Button
                className="button"
                onClick={handleMcqQuestionRemove}
                disabled={selectVisible}
              >
                Remove
              </Button>
              <Button
                className="button"
                onClick={handleSelect}
                disabled={selectVisible}
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
              disabled={selectVisible}
            >
              Text Question
            </Button>
          </Grid>
          <Grid xs>
            <Button
              className="button"
              variant="outlined"
              onClick={CreateAudioQuestion}
              disabled={selectVisible}
            >
              Audio Question
            </Button>
          </Grid>
          <Grid xs>
            <Button
              className="button"
              variant="outlined"
              onClick={CreateMcqQuestion}
              disabled={selectVisible}
            >
              MCQ
            </Button>
          </Grid>
        </Stack>
      </div>
      {selectVisible && (
        <div className="select">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            turpis nunc eget lorem dolor sed. Morbi leo urna molestie at. Sem
            nulla pharetra diam sit amet nisl suscipit. Augue eget arcu dictum
            varius duis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Ac
            orci phasellus egestas tellus rutrum. Commodo elit at imperdiet dui
            accumsan. Rhoncus urna neque viverra justo nec ultrices. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra
            massa massa ultricies mi quis hendrerit. Feugiat in ante metus
            dictum at tempor commodo. Pulvinar etiam non quam lacus. Habitasse
            platea dictumst vestibulum rhoncus est. Felis imperdiet proin
            fermentum leo vel orci. Faucibus a pellentesque sit amet porttitor
            eget dolor morbi non. Blandit libero volutpat sed cras.
          </p>
          <Button className="button" onClick={handleSelected}>
            selected
          </Button>
        </div>
      )}
    </div>
  );
}
