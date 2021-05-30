import React from 'react';

// Material ui components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function Features({ state, setState }: { state: any, setState: any }) {

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked===false?0:1 });
  };

  const handleChangeSlider = (event: any) => {
    setState({ ...state, [event.name]: event.value });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography>
          Age
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider
          defaultValue={state.age}
          aria-labelledby="age"
          step={0.1}
          min={20}
          max={70}
          valueLabelDisplay="on"
          onChangeCommitted={(event, value) =>
            handleChangeSlider({ "name": "age", "value": value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          Years of experience
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider
          defaultValue={state.years_of_experience}
          aria-labelledby="years_of_experience"
          step={1}
          min={0}
          max={10}
          valueLabelDisplay="on"
          onChangeCommitted={(event, value) =>
            handleChangeSlider({ "name": "years_of_experience", "value": value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          Lesson price
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider
          defaultValue={state.lesson_price}
          aria-labelledby="lesson_price"
          step={1}
          min={100}
          max={4000}
          valueLabelDisplay="on"
          onChangeCommitted={(event, value) =>
            handleChangeSlider({ "name": "lesson_price", "value": value })
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          Qualification
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider
          defaultValue={state.qualification}
          aria-labelledby="qualification"
          step={1}
          min={1}
          max={4}
          valueLabelDisplay="on"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.physics===0?false:true}
              onChange={handleChangeCheckbox}
              name="physics"
              color="primary"
            />
          }
          label="Physics"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.chemistry===0?false:true}
              onChange={handleChangeCheckbox}
              name="chemistry"
              color="primary"
            />
          }
          label="Chemistry"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.biology===0?false:true}
              onChange={handleChangeCheckbox}
              name="biology"
              color="primary"
            />
          }
          label="Biology"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.english===0?false:true}
              onChange={handleChangeCheckbox}
              name="english"
              color="primary"
            />
          }
          label="English"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.geography===0?false:true}
              onChange={handleChangeCheckbox}
              name="geography"
              color="primary"
            />
          }
          label="Geography"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.history===0?false:true}
              onChange={handleChangeCheckbox}
              name="history"
              color="primary"
            />
          }
          label="History"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          Mean exam points
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider
          defaultValue={state.mean_exam_points}
          aria-labelledby="mean-exam-points"
          step={1}
          min={30}
          max={100}
          valueLabelDisplay="on"
          onChangeCommitted={(event, value) =>
            handleChangeSlider({ "name": "mean_exam_points", "value": value })
          }
        />
      </Grid>
    </Grid>
  );
};