import * as Element from './Element.js';

export const Habit = (title, placeholder = '', isEditing = false) =>
  isEditing ? Element.Input(title, placeholder) : Element.Title(title);

export const HabitOptions = habitDetail => {
  const detailToArray = Object.entries(habitDetail);
  return detailToArray.reduce(
    (detailTemplate, [detailKey, detailValue]) =>
      (detailTemplate += Element.Text(detailValue, detailKey)),
    '',
  );
};

export const CalendarItem = date => {
  return `<div class="calendar-item">
    <div class="date">${date}</div>
    <div class="content"></div>
  </div>`;
};

export const Calendar = (challengePeriod, firstDate) => {
  const [_, month, date] = firstDate.split('/').map(Number);
  const calendarItems = Array.from({ length: challengePeriod }, (_, i) => {
    return CalendarItem(`${month}/${date + i}`);
  });

  return calendarItems.reduce(
    (canlendarTemplate, item) => (canlendarTemplate += item),
    '',
  );
};

export const CheckButton = text => {
  return Element.Button(text);
};