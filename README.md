# Meet App

Meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) approach.
The app allows users to view and filter upcoming events by city, control how many events are displayed, work offline, and visualize event data with charts.

## Features, User Stories & Scenarios

### Feature 1: Filter events by city
**User Story**  
As a user, I should be able to filter events by city, so that I can see a list of events taking place in the city I choose.

**Scenarios**
- **Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities  
  - Given the user hasn’t searched for any city  
  - When the user opens the app  
  - Then the user should see a list of upcoming events from all cities  

- **Scenario 2:** User should see a list of suggestions when they search for a city  
  - Given the main page is open  
  - When the user starts typing in the city textbox  
  - Then the user should see a list of suggested cities that match what they typed  

- **Scenario 3:** User can select a city from the suggested list  
  - Given the user was typing in the city textbox and the list of suggestions is showing  
  - When the user selects a city from the suggested list  
  - Then the events list should update to show upcoming events in that selected city  

---

### Feature 2: Show/hide event details
**User Story**  
As a user, I should be able to show or hide event details, so that I can quickly decide if I want to read more information about an event.

**Scenarios**
- **Scenario 1:** An event element is collapsed by default  
  - Given the user has opened the app and events are displayed  
  - When the user views the list of events  
  - Then each event should be collapsed (details hidden) by default  

- **Scenario 2:** User can expand an event to see details  
  - Given the list of events is displayed  
  - When the user clicks “Show details” for an event  
  - Then the event details should be shown (expanded)  

- **Scenario 3:** User can collapse an event to hide details  
  - Given an event is expanded (details are visible)  
  - When the user clicks “Hide details” for that event  
  - Then the event details should be hidden again (collapsed)  

---

### Feature 3: Specify number of events
**User Story**  
As a user, I should be able to choose how many events are shown, so that I can control how many events I see at one time.

**Scenarios**
- **Scenario 1:** When user hasn’t specified a number, 32 events are shown by default  
  - Given the user has opened the app  
  - When the events list is displayed  
  - Then the user should see 32 events by default  

- **Scenario 2:** User can change the number of events displayed  
  - Given the user is viewing the events list  
  - When the user changes the number of events to display  
  - Then the events list should update to show that number of events  

---

### Feature 4: Use the app when offline
**User Story**  
As a user, I should be able to use the app when I’m offline, so that I can still view events even without an internet connection.

**Scenarios**
- **Scenario 1:** Show cached data when there’s no internet connection  
  - Given the user has opened the app before and data was loaded once  
  - And the user is currently offline  
  - When the user opens the app  
  - Then the app should display cached events data  

- **Scenario 2:** Show an error when user changes search settings while offline  
  - Given the user is offline  
  - When the user changes the city or the number of events  
  - Then the user should see an error message that data can’t be updated while offline  

---

### Feature 5: Add an app shortcut to the home screen
**User Story**  
As a user, I should be able to add the app to my home screen, so that I can open it faster like a normal app.

**Note:** This feature is handled by the user’s operating system and is not covered by automated tests in this project.

---

### Feature 6: Display charts visualizing event details
**User Story**  
As a user, I should be able to see charts about events (e.g., number of events per city), so that I can understand event data quickly in a visual way.

**Scenarios**
- **Scenario 1:** Show a chart with the number of upcoming events in each city  
  - Given the user has events loaded in the app  
  - When the user views the charts section  
  - Then the user should see a chart showing the number of upcoming events for each city  