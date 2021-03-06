# Next Level Week 04 - ReactJS Project with Next.js

This is a project built during the 4th Next Level Week, provided by the Rocketseat team. Moveit is a web application where you can use the Pomodoro technique. You can learn more about this technique [here](https://francescocirillo.com/pages/pomodoro-technique).

The application has the following features:
- A leveling system.
- A countdown starting in 25 minutes.
- When the countdown ends, you can do two things:
    - Do a random exercise and earn XP points to level up and restart the countdown.
    - Skip the exercise and restart the countdown.
- A notification message when the countdown reaches 0.
- A modal saying that you level up.
- The level, current experience and number of challenges completed are saved in the cookies.
- Use of useState and useEffect hooks and the Context API.
- Login with Github OAuth.
- A Leaderboard page ranked by user experience.
- Nextjs API Routes.
- User data persistence.

## Libraries and tools used

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [Vercel](https://vercel.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## How to install dependencies

It is necessary have:

- At least Node v12.20.1 version. 
- yarn (recommended) or npm.

Clone this repository and in the root folder run one of the following commands:

`yarn install (recommended)`

`npm install`

## How to run

Just run one of the following commands to start the application:

`yarn dev` (recommended)

`npm run dev`

## Vercel

This web application was deployed on the Vercel platform and you can access it through this link:

https://moveit-rouge-nine.vercel.app/

## Application Images

You can see the application images on images folder.

![Login](images/login-desktop.jpeg)
![Dashboard](images/dashboard-desktop.jpeg)
![Leaderboard](images/leaderboard-desktop.jpeg)

## TODO

- [x] Add css media queries
- [ ] Add PWA functionality
- [x] Add application images (How does the application look like?)
- [ ] Add dark theme
- [x] Add github integration
- [x] Add a new page listing all github users by rating
- [ ] Share level up on Twitter
