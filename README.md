# Project presentation
***

This project is a React Calendar date picker.

Here is the view of the input before the calendar is open:

![Calendar input](assets/view-calendar-input.png)

Here is the view of the calendar after clicking on the input.

![Calendar input](assets/view-calendar-open.png)

# Getting started
***
### Install dependencies
You can install this calendar with npm:

```
npm install react-calendar-nekochan
```
## Add the component
***
#### Import the calendar
```
import Calendar from "react-calendar-nekochan"
```

#### Insert the calendar

```
<Calendar ID={'birthDate'} handleMyClick={handleClickBirthdate} text={"Date of Birth"} className={"color"}/>
```

ID : id for the input
text : label of the input
handleMyClick : for functions to retrieve the date
example:
```
const handleClickBirthdate = (cnt) => {
        setBirthDate(cnt)
    }
```
className :  to add some style to the calendar
