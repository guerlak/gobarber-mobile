import React, {useState, useMemo} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Container, DateButton, DateText} from './styles';
import {Platform} from 'react-native';

export default function DateInput({date, onChange}) {
  const [show, setShow] = useState(false);

  const formatedDate = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  function handleChange(e, datePick) {
    setShow(Platform.OS === 'ios');
    if (datePick) {
      onChange(datePick);
    }
  }

  const handleOpenDatePicker = () => {
    setShow(true);
  };

  return (
    <Container>
      <DateButton onPress={handleOpenDatePicker}>
        <Icon name="event" color="#fff" size={30} />
        <DateText>{formatedDate}</DateText>
      </DateButton>
      {show && (
        <DateTimePicker
          minuteInterval={60}
          value={date}
          mode="date"
          display="spinner"
          onChange={handleChange}
          locale="pt"
        />
      )}
    </Container>
  );
}
