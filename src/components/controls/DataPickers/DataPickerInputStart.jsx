import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import './DataPicker.css';

import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
export default function DataPickerInputStart(props) {
  const handleColorStart = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const {
    name, value, onChange,
  } = props;

  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value,
    },
  });
  return (

    <DatePicker
      showIcon
      locale="ru"
      showTimeSelect
      selected={value}
      timeClassName={handleColorStart}
      dateFormat="dd/MM/yyyy HH:mm:ss"
      timeCaption="время"
      timeFormat="HH:mm"
      timeIntervals={15}
      name={name}
      value={value}
      onChange={(date) => onChange(convertToDefEventPara(name, date))}
      required
    />

  );
}
