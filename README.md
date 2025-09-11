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

- **HTML** - I will use HTML to build the structure of the app.
- **CSS** - I will Style the app with CSS to keep it entertaining
- **React** - I will use React to create the pages and update content quickly.
- **Service** - I will use a service to get and send data for the app.
- **DB/Login** - I will use a database and login so users can save accounts and preferences.
- **WebSocket** - I will use WebSocket so people can join and talk in real time.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

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
