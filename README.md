<!-- Banner Image, Landing Page Of Computer Vision Site -->
<div align="center">
  <br />
    <a href="">
      <img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/SnapgramBanner.png?alt=media&token=54c13604-f2e7-466a-8631-4debc47f93f5" alt="Project Banner">
    
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/Tailwind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind" />
    <img src="https://img.shields.io/badge/node-js?style=for-the-badge&logo=nodedotjs&logoColor=white&label=Node%20JS" alt="Node JS" />
    <img src="https://img.shields.io/badge/mongodb-purple?style=for-the-badge&logo=mongodb&logoColor=white&color=%2347A248" alt="Mongo DB" />
    <img src="https://img.shields.io/badge/express-yellow?style=for-the-badge&logo=express&logoColor=white&color=%23000000" alt="Express JS" />
    <img src="https://img.shields.io/badge/.env-yellow?style=for-the-badge&logo=.env&logoColor=black&color=%23ECD53F" alt="Dot env" />
    <img src="https://img.shields.io/badge/passport-yellow?style=for-the-badge&logo=passport&logoColor=black&color=%2334E27A" alt="Passport" />
    <img src="https://img.shields.io/badge/mongoose-yellow?style=for-the-badge&logo=mongoose&logoColor=white&color=%23880000" alt="Mongoose" />
    <img src="https://img.shields.io/badge/socket.io-yellow?logo=socket.io&color=%23010101" alt="Socket.io" /> 
    <img src="https://img.shields.io/badge/reactquery-yellow?logo=reactquery&logoColor=white&color=%23FF4154" alt="React Query" /> 
    <img src="https://img.shields.io/badge/reactrouter-yellow?logo=reactrouter&logoColor=white&color=%23CA4245" alt="React Router" /> 
  </div>

  <h1 align="center">SnapGram</h1>

   <div align="center">
     <h4>A social Networking Site</h4>
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. ⚙️ [Hardware Output](#hardwareoutput)

## 🚨 About

A lot of tailwind css. It was a good practice. for tailwind, react and to learn web sockets <br>
This project was done following a tutorial fromo JavaScript Mastery on Youtube (https://youtu.be/_W3R2VwRyF4?si=P2EO8gCv5cWXNjcU)

## <a name="introduction">🤖 Introduction</a>

...

## <a name="tech-stack">⚙️ Tech Stack</a>

- React - for the front end
- React Router - for navigation
- React Query - for api requests
- Tailwind CSS - for styling
- Node JS - for the back end
- Express JS - for the back end
- MongoDB - for the database
- Mongoose - for the database
- Socket.io - for the web sockets
- Dot env - for the environment variables
- Passport - for the authentication

## <a name="features">🔋 Features</a>

👉 **Home Screen**:

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Snapgram1.png?alt=media&token=a077bd4f-c7d7-4e45-b862-48269c5232e2" alt="Home">

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Snapgram2.png?alt=media&token=df213177-48ff-4577-a134-e5a24d7ce70c" alt="Home">

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Snapgram3.png?alt=media&token=36a0de54-bf49-4031-bd8e-9ea4fb7e740d" alt="Home">

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Snapgram4.png?alt=media&token=02e197a8-db31-41c4-a67b-2f703a8b28a4" alt="CreatePost">

<img src="https://firebasestorage.googleapis.com/v0/b/karizmatik-14de4.appspot.com/o/Snapgram5.png?alt=media&token=787d60fb-679e-4eea-ada5-794a9aee6749" alt="Messaging">

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/vroymv/Social-Networking-Site.git
cd Snapgram
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
cd Client
```

```bash
npm run dev
```

`Running the Server`
<br>
Open a new terminal

```bash
cd Server
```

```bash
nodemon app.js
```

**Setup Tailwind**

Folloow these instructions to set up tailwindcss(https://tailwindcss.com/docs/guides/vite)

## <a name="snippets">🕸️ Snippets</a>

**Modify the following In your Code**

<details>
<summary><code>Server/app.js</code></summary>

Replace process.env.MONGO_URL in your code to your mongo connection string

```javascript
//for saving sessions on server
const MONGO_URL = process.env.MONGO_URL;
```

</details>

<details>
<summary><code>Server/database.js</code></summary>

Replace process.env.MONGO_URL in your code to your mongo connection string

```javascript
//Mongo DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
```

</details>

## <a name="links">🔗 Links</a>

...

## <a name="more">🚀 More</a>

...
