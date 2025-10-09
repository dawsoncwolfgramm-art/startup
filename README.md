# Vote Hot Takes

[My Notes](notes.md)

A brief description of the application here. An app that provides fun conversation topics for any situation, perfect for parties, road trips, or just keeping things interesting. Voting for what you prefer more than other things in Hot Topics.”


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Ever been stuck in awkward silence? My app gives you instant conversation starters, perfect for parties, road trips, or just breaking the ice. In seconds, you’ll have everyone laughing, debating, and connecting! It’s easy to use, fun for all ages, and makes talking to people way less stressful. Whether you’re with friends or meeting someone new, you’ll always have something to say.

### Design

#### Home Design
![Home Design image](https://drive.google.com/uc?export=view&id=1TRKcKlTZdh0i4N02KiO32WO1E8DmBQiU)

#### Topics
![Topics Design image](https://drive.google.com/uc?export=view&id=1N_bCAdhbZzk2pOfQ-H7fOukZ1o1UkaAq)

#### AI Generated Hot Takes
![AI Generated Hot Takes Design image](https://drive.google.com/uc?export=view&id=1QP7rUvqu7AcoTbqLD6nbkv83I7nMoChL)

#### About Me
![About Me Design image](https://drive.google.com/uc?export=view&id=1tblYIs2XmaX6BWwn4HHYm-9Sv27_XeYX)

The app lets you log into your account so it can learn what topics you like and show you more of them. You can choose a genre of topics you want to discuss, then start the conversation. Everyone can join in either in person or online and share their thoughts.

```mermaid
sequenceDiagram
    actor User1
    actor User2
    actor User3
    User1->>Server: Request Hot Take
    Server-->>User1: AI Generated Topic
    User1->>Server: Vote Agree
    Server-->>User2: Update results
    Server-->>User3: Update results
    User2->>Server: Vote Disagree
    Server-->>User1: Update results
    Server-->>User3: Update results
```

### Key features

- Personalized Topics
- Group Mode
- Trending Topics Feed
- Save Favorites
- Global access
- New and Creative
- Personable

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will use HTML to build the structure of the app and create 4 different pages that the application will have.
- **CSS** - I will style the app with CSS to keep it entertaining.
- **React** - I will use React to create the pages and update content quickly. I will also have a function to display a user login page. 
- **Service** - I will use a service to get and send agreement and disagreement on the voting application.
- **DB/Login** - I will use a database and login so users can save accounts and preferences while adding to favorites.
- **WebSocket** - I will use WebSocket so people can join and talk in real time, and update the agreement and disagreement on the voting application to your account and other people's account.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://votehottake.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I made 5 differnt pages that include the index, topics of what to vote on, actual play page, scores where you can see who voted for who, and the about page.
- [x] **Proper HTML element usage** - I followed and did put proper HTML element into each page with html, body, main, table, thead, tr, etc.
- [x] **Links** - I made each page accessable to any other page while still keeping it organized. Each page has a link to every other page. 
- [x] **Text** - I have text boxed explaining about me and also about the website and how to use it. 
- [x] **3rd party API placeholder** - I did made a spot where the ChatGPT could be placed so that it could send in responsed to my questions. 
- [x] **Images** - In the about page I replaced the placeholder.jpg with my own jpg image to show more about me. 
- [x] **Login placeholder** - I did placed the login at the front of the page to make a way that people can login and save what they have already said and their topics about past votes.
- [x] **DB data placeholder** - I placed placeholders through my project showing that in multiple different areas people will be able to comment and be able to go and save what they have done. These are the DB data placeholders. 
- [x] **WebSocket placeholder** - I made a place at the play button where they will be able to comment on why they would choose that if they were not in the same place. This will allow them to talk in real time. 

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I made the header, footer, and main content body a similar color and made it match each of the sections. Added some bootstrap to help make it more presentable. 
- [x] **Navigation elements** - I I made it so that you can know what page is active and you can always access any other one so that you can get from page to page. 
- [x] **Responsive to window resizing** - I made it so that when you go into a smaller window the links to each page is a drop down menu that can still guide you to a different page.
- [x] **Application elements** - I made the body colorfull to make it more presentable and engaging where people would want to come and enjoy the game that I made. 
- [x] **Application text content** - I centered each of the text to make it seem professional and on some of the text I made text boxes where I would apply the API elements.
- [x] **Application images** - I made a cover to make it look nice around the image.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I downloaded the latest vite@ and set it up and put it up in src folder so that it followed the write up.
- [x] **Components** - I created the App.jsx file, which serves as the base of my page. I converted login.html, play.html, about.html, scores.html, and topics.html into React components as .jsx files in my src folder. This allows me to use them as components while keeping the header and footer in App.jsx unchanged when switching between different pages.
- [x] **Router** - I wrapped my App.jsx return in a BrowserRouter, which let me set up different routes for each component. This way, when a specific URL is visited, the corresponding component is displayed in App.jsx.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
