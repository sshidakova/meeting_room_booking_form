import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import './DataPicker.css';

import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
export default function DataPickerInputEnd(props) {
  const handleColorEnd = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const {
    name, value, onChange,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value,
    },
  });

  return (
  // <div className="react-datepicker">

    <DatePicker
      showIcon
      locale="ru"
      showTimeSelect
      selected={value}
      onChange={(date) => onChange(convertToDefEventPara(name, date))}
      timeClassName={handleColorEnd}
      dateFormat="dd/MM/yyyy HH:mm:ss"
      name={name}
      value={value}
      timeCaption="время"
      timeFormat="HH:mm"
      timeIntervals={15}
      required
    />
  // </div>
  );
}
