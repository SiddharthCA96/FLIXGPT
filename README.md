# FlixGPT

- Create vite@latest
- Configure tailwind
- Header Build
- Routing 
- Start building login form
- SignUp form
- Form Validation(using regex) 
- Password Regex
  - /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/ 
  - The password must:
  - Contain at least one digit.
  - Contain at least one letter.
  - Be between 8 and 32 characters long.
- Firebase Setup
- Authentication
- Save the user data(user object) in redux store as we may need it in future
  - Create appstore and userslice inside utils
  - provide store to app
- Give the infoof user send the data to slice
- After signUp/signin we have to send the user to browse page
- Browse page
 - Header
  - Sign Out button
  - User logo
- Solve few bugs related to routing and protected routes(user should not access browse page without signin)
- All the routing is done in header 
- Unsubscribe from onAuthStateChanged callback
- Get the api from tmdb 
- Make an api call from browse to tmdp
- Put the movies data to redux store (create a movi slice for this)
- Create the main and secondry container in browse
- Main Container
 - VideoTitle
 - VideoBackground
  - Fetch the trailer of the movie from the store



# Features
- Login/SignUp page
  - Signup/Signup form
  - Redirect to browse page after upper step

- Browse page(only comes after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Title and description
  - Movies Suggestion
    - List of Movies category wise  
- Flixgpt
    - Search Bar
    - Movies SUggestion