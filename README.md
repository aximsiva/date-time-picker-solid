# solid-date-time-picker
A new Date and Time picker package for Solid JS.

# Installaiton

You can install solid-date-time-picker package via,
using NPM
```sh
npm install solid-date-time-picker
```
or using Yarn

```sh
yarn add solid-date-time-picker
```

## Useage
import the package using this following line,

```sh
import { DateTimePicker } from 'solid-date-time-picker'
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

# Preview
### Day Wise Preview
![dayWise](https://user-images.githubusercontent.com/72572188/198945647-cd36a4c2-a2b6-49af-9ab7-a18d0e3e17e8.png)
### Month Wise Preview
![monthWisse](https://user-images.githubusercontent.com/72572188/198945731-58370c9a-0c12-463f-a0ce-486ac5b7830f.png)
### Year Wise Preview
![yearWise](https://user-images.githubusercontent.com/72572188/198945775-bd388394-ae70-426a-9a50-d2a103a29d1b.png)
### Time Preview
![Screenshot from 2022-10-31 11-57-07](https://user-images.githubusercontent.com/72572188/198945780-d08bdf10-3a62-49f6-9b4f-496634832dd7.png)

# Properties
| Props | Value Type| Example | Default Value | Discription |
|------ | ------| ------| -------  | ------ |
| currentDate | `Date / string` | new Date() / '01.01.2022'| | It is a only Mandatory Field, default date for the calendar.|
|dateFormat|`string`| YYYY| `DD MMM, YYYY` | Date Format that's been displayed. |
|enableDatRangeSelector|`boolean`|True / False| `False`| Enables date Range Selection. |
|prevDate|`Date`|new Date() |`moment().startOf('weeks')`| Starting Date of range selection.|
|minDate|`Date`|new Date() |`undefined`| Start Date. |
|maxDate|`Date`|new Date() |`undefined`| End Date. |
|customizeRangeSelectedDates|`string`|CSS class name |`' '`| customizing selected dates. |
| __HEADER SECTION__ |
|headerMonthFormat|`string`|MMM|`MMM`| Header month view. |
|headerYearFormat|`string`|YYYY|`YYYY`| Header year view. |
|enableArrowNavigation|`boolean`| True / False|`True`| Enables/Disables the navigation of Default view. |
|customizeLeftArrow|`string`|CSS class name |`' '`| customizing left arrow. |
|customizeRightArrow|`string`|CSS class name |`' '`| customizing right arrow. |
|customizeActiveMonth|`string`|CSS class name |`' '`| customizing calendar view. |
|__SECTION 1__|
|enableSelectedDate|`boolean`| True / False|`True`| Shows selected date.|
|enableSelectedDateEditor|`boolean`| True / False|`False`| Makes selected date editable. |
|customizeSelectedDate|`string`|CSS class name |`' '`| customizing selected date view. |
|enableTodayNavigator|`boolean`| True / False|`False`| Enables today navigating button.|
|customizeTodayNavigator|`string`|CSS class name |`' '`| customizing today button. |
|__SECTION 2__|
|enableCalendarViewType|`boolean`| True / False|`False`| Enables Calendar type switching button.|
|activeCalendarView|`string`| day / month / year |`day`| Active view |
|cutomizeCalendarViewButtons|`string`|CSS class name |`' '`| customizing preview type buttons. |
|__CONTAINER__|
|customizeListView|`string`|CSS class name |`' '`| customizing the list. |
|customizeListHeader|`string`|CSS class name |`' '`| customizing the list header. |
|customizeYearLeftNavigationArrow|`string`|CSS class name |`' '`| customizing the year view left arrow navigator. |
|customizeYearRightNavigationArrow|`string`|CSS class name |`' '`| customizing the year view left arrow  navigator. |
|__TIME__|
|enableTimeView|`boolean`| True / False|`False`| Enables Time view in calendar.|
|ednableTimeEditing|`boolean`| True / False|`False`| Enables Time editing option in calendar.|
|customizeTimeViewSwitch|`string`|CSS class name |`' '`| customizing the timeer view switch button. |
|customizeTimeInputField|`string`|CSS class name |`' '`| customizing the time input field. |
|customizeTimeUpdateButton|`string`|CSS class name |`' '`| customizing the time update button. |
|customizeConsolidateTimeView|`string`|CSS class name |`' '`| customizing the time day and view element. |
|customizeTimeDownArrow|`string`|CSS class name |`' '`| customizing the time increase buttons. |
|customizeTimeUpArrow|`string`|CSS class name |`' '`| customizing the time decrease buttons. . |
|renameTimeUpdateButton|`string`|value |`' '`| For rename the update button. |
|__OUTPUT__|
|calendarResponse|`(props: type)=>void`|||Callback to get the values|

# Dependancies
#### [SolidJs](https://www.solidjs.com/)
#### [Type Script](https://www.typescriptlang.org/) ![](https://user-images.githubusercontent.com/94821587/198988301-5acb3758-bdfe-4764-8582-4b70e427dc6e.svg | width=40)
#### [Moment](https://momentjs.com/)
#### [Sass](https://sass-lang.com/) ![sass-original](https://user-images.githubusercontent.com/94821587/198988287-1b4f4312-7959-46e5-bef3-9ed5b5eec194.svg | width=40) 


# License
`MIT`
