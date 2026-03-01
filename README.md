# Meet App
**Live Demo:** https://meet-fi45midtv-enkeledams-projects.vercel.app/

A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) approach.  
The app allows users to search for events in different cities, view event details, and use the app even while offline.

---

## User Stories

### Feature 1: Filter Events By City
**User Story:**  
As a user,  
I should be able to filter events by city  
So that I can see events taking place in a specific city.

### Feature 2: Show/Hide Event Details
**User Story:**  
As a user,  
I should be able to show or hide event details  
So that I can see more information about an event when I need it.

### Feature 3: Specify Number of Events
**User Story:**  
As a user,  
I should be able to specify the number of events displayed  
So that I can control how many events I want to see at once.

### Feature 4: Use the App When Offline
**User Story:**  
As a user,  
I should be able to use the app when offline  
So that I can still view event information without an internet connection.

### Feature 5: Add an App Shortcut to the Home Screen
**User Story:**  
As a user,  
I should be able to add the app shortcut to my home screen  
So that I can quickly open the app like a native application.

### Feature 6: Display Charts Visualizing Event Details
**User Story:**  
As a user,  
I should be able to view charts visualizing event details  
So that I can easily understand event data (e.g., number of events per city).

---

## Gherkin Scenarios

### Feature 1: Filter Events By City

```gherkin
Scenario: When user hasn’t searched for a city, show upcoming events from all cities
  Given the user hasn’t searched for any city
  When the user opens the app
  Then the user should see a list of upcoming events from all cities

Scenario: User should see a list of suggestions when they search for a city
  Given the main page is open
  When the user starts typing in the city textbox
  Then the user should see a list of suggested cities that match what they typed

Scenario: User can select a city from the suggested list
  Given the user has typed "Berlin" in the city textbox and the suggested list is showing
  When the user selects "Berlin, Germany" from the list
  Then the city filter should change to "Berlin, Germany" and the user should see events in that city
```

---

### Feature 2: Show/Hide Event Details

```gherkin
Scenario: An event element is collapsed by default
  Given the user has opened the app and events are displayed
  When the user views the list of events
  Then each event should be collapsed by default

Scenario: User can expand an event to see details
  Given the event list is displayed and an event is collapsed
  When the user clicks on the "Show details" button for that event
  Then the event should expand to show event details

Scenario: User can collapse an event to hide details
  Given an event is expanded and its details are visible
  When the user clicks on the "Hide details" button for that event
  Then the event should collapse and hide its details
```

---

### Feature 3: Specify Number of Events

```gherkin
Scenario: When user hasn’t specified a number, 32 events are shown by default
  Given the user has opened the app
  When the event list is displayed
  Then the user should see a maximum of 32 events by default

Scenario: User can change the number of events displayed
  Given the user has opened the app and the event list is displayed
  When the user changes the number of events in the settings/input field
  Then the app should display the number of events the user selected
```

---

### Feature 4: Use the App When Offline

```gherkin
Scenario: Show cached data when there’s no internet connection
  Given the user has previously loaded events and has cached data available
  When the user opens the app without an internet connection
  Then the app should show the cached events

Scenario: Show error when user changes search settings while offline
  Given the user is offline and the app is showing cached data
  When the user changes the city or the number of events
  Then the app should show an error message indicating data cannot be updated while offline
```

---

### Feature 5: Add an App Shortcut to the Home Screen

```gherkin
Scenario: User can install the meet app as a shortcut on their home screen
  Given the user is using a supported device/browser
  When the user chooses "Add to Home Screen"
  Then the app should be added as a shortcut on the user’s home screen
```

---

### Feature 6: Display Charts Visualizing Event Details

```gherkin
Scenario: Show a chart with the number of upcoming events in each city
  Given the user has opened the app and events are loaded
  When the user views the charts section
  Then the user should see a chart showing the number of upcoming events per city
```



