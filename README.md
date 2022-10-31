# solid-date-time-picker
An interactive `Date and Time Picker` for SolidJS.

# Installation

__npm:__
```sh
npm install solid-date-time-picker
```
__yarn:__

```sh
yarn add solid-date-time-picker
```

## Example
Here is an example of a basic app using DateTimePicker component:

```sh
import { DateTimePicker } from 'solid-date-time-picker'

function App() {
  return <DateTimePicker currentDate={moment().toDate()} />;
}
```

# Preview
![Frame 1 (1)](https://user-images.githubusercontent.com/94821587/199010399-3145721f-9633-4bdb-89ee-932f868cf864.png)

![Frame 2](https://user-images.githubusercontent.com/94821587/199007649-77ded059-e908-4856-96a6-1d3bbc49e830.png)

# Properties
| Props | Type | Default Value | Discription |
|------ | ------| ------ | ------ |
| currentDate | `Date / string` | | Mandatory Field, default date for the calendar.|
|dateFormat|`string`| `DD MMM, YYYY` | Date Format that's been displayed. |
|enableDateRangeSelector|`boolean`| `False`| Enables date Range Selection. |
|prevDate|`Date` |`moment().startOf('weeks')`| Starting Date of range selection.|
|minDate|`Date` |`undefined`| Start Date. |
|maxDate|`Date` |`undefined`| End Date. |
|customizeRangeSelectedDates|`string`|`' '`| customizing selected dates. |
| __HEADER__ |
|headerMonthFormat|`string`|`MMM`| Header month view. |
|headerYearFormat|`string`|`YYYY`| Header year view. |
|enableArrowNavigation|`boolean`|`True`| Enables/Disables the navigation of Default view. |
|customizeLeftArrow|`string`|`' '`| customizing left arrow. |
|customizeRightArrow|`string`|`' '`| customizing right arrow. |
|customizeActiveMonth|`string`|`' '`| customizing calendar view. |
|__SECTION 1__|
|enableSelectedDate|`boolean`|`True`| Shows selected date.|
|enableSelectedDateEditor|`boolean`|`False`| Makes selected date editable. |
|customizeSelectedDate|`string`|`' '`| customizing selected date view. |
|enableTodayNavigator|`boolean`|`False`| Enables today navigating button.|
|customizeTodayNavigator|`string`|`' '`| customizing today button. |
|__SECTION 2__|
|enableCalendarViewType|`boolean`|`False`| Enables Calendar type switching button.|
|activeCalendarView|`day / month / year` |`day`| Active view |
|cutomizeCalendarViewButtons|`string`|`' '`| customizing preview type buttons. |
|__CONTAINER__|
|customizeListView|`string`|`' '`| customizing the list. |
|customizeListHeader|`string`|`' '`| customizing the list header. |
|customizeYearLeftNavigationArrow|`string`|`' '`| customizing the year view left arrow navigator. |
|customizeYearRightNavigationArrow|`string`|`' '`| customizing the year view left arrow  navigator. |
|__TIME__|
|enableTimeView|`boolean`|`False`| Enables Time view in calendar.|
|ednableTimeEditing|`boolean`|`False`| Enables Time editing option in calendar.|
|customizeTimeViewSwitch|`string`|`' '`| customizing the timeer view switch button. |
|customizeTimeInputField|`string`|`' '`| customizing the time input field. |
|customizeTimeUpdateButton|`string`|`' '`| customizing the time update button. |
|customizeConsolidateTimeView|`string`|`' '`| customizing the time day and view element. |
|customizeTimeDownArrow|`string`|`' '`| customizing the time increase buttons. |
|customizeTimeUpArrow|`string`|`' '`| customizing the time decrease buttons. . |
|renameTimeUpdateButton|`string`|`' '`| To rename the update button. |
|__OUTPUT__|
|calendarResponse|`(props: type)=>void`|||Callback to get the values|

# Dependencies
[<img src="https://user-images.githubusercontent.com/94821587/199000964-80e84838-7f3f-49f9-9a91-6bcf32f9c87f.svg" alt="typescript" width="40" height="40" />](https://www.solidjs.com/)
[<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>](https://www.typescriptlang.org/)
[<img src="https://user-images.githubusercontent.com/94821587/199001054-6d046033-4914-4b52-9fde-081e749618d4.svg" alt="typescript" width="40" height="40"/>](https://momentjs.com/)
[<img src="https://user-images.githubusercontent.com/94821587/199011459-d948644b-d0c5-4a14-8809-96bf5508edc9.png" alt="typescript" width="40" height="40"/>](https://www.w3.org/Style/CSS/Overview.en.html)

# License
`MIT`
