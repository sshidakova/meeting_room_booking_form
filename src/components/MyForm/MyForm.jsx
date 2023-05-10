import React, { useState } from 'react';
import {
  Grid, TextField, Button, Card, CardContent, Typography,
} from '@material-ui/core';
import Controls from '../controls/Controls';
import Form from './Form';
import * as formsServices from '../../helpers/formsServices';

export default function MyForm() {
  const [values, setValues] = useState({
    start: new Date(),
    end: new Date(),
    tower: '',
    floor: '',
    room: '',
    textareatext: '',
  });

  const handleInputChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(Object.fromEntries(new FormData(e.target))));
  };

  const resetHandler = () => {
    setValues({
      start: new Date(),
      end: new Date(),
      tower: '',
      floor: '',
      room: '',
      textareatext: '',
    });
  };

  return (
    <div className="App">
      <Grid>
        <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Бронирование переговорной
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom align="center">
              Заполните форму для бронирования
            </Typography>
            <Form onSubmit={handleSubmit}>
              <Grid
                container
                spacing={1}
                align="center"
              >
                <Grid xs={12} item>
                  <Controls.Select
                    name="tower"
                    label="Выберите башню"
                    value={values.tower}
                    onChange={handleInputChange}
                    options={formsServices.tower}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Controls.Select
                    name="floor"
                    label="Выберите этаж"
                    value={values.floor}
                    values={values}
                    onChange={handleInputChange}
                    options={formsServices.getFloorCollection()}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.Select
                    name="room"
                    label="Выберите номер переговорной"
                    value={values.room}
                    onChange={handleInputChange}
                    options={formsServices.getMeetingRoomCollection()}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.DataPickerInputStart
                    name="start"
                    value={values.start}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.DataPickerInputEnd
                    name="end"
                    onChange={handleInputChange}
                    value={values.end}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controls.TextField
                    name="textareatext"
                    value={values.textareatext}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Controls.Button
                      type="submit"
                      text="Submit"
                    />

                    <Controls.Button
                      text="Reset"
                      color="default"
                      onClick={resetHandler}
                    />
                  </div>
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
