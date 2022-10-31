import moment from 'moment';
import type { Component } from 'solid-js';

import { SolidCalendar } from './component';

const App: Component = () => {
  return (
    <div class='parent'>
      <SolidCalendar
        currentDate={moment().toDate()}
        enableTodayNavigator
        enableCalendarViewType
        enableTimeView
      />
    </div>
  );
};

export default App;