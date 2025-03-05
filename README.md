# node-comment-app
A simple comment app I made following alongside [colt steele's webdev course](https://www.udemy.com/course/the-web-developer-bootcamp/) for future reference.

## NPM Packages used: 

- [express](https://www.npmjs.com/package/express)
- [ejs](https://www.npmjs.com/package/ejs)
- [json-format](https://www.npmjs.com/package/json-format) - Automatically formatting objects in readable JSON
- [uuid](https://www.npmjs.com/package/uuid) - Generating unique universal IDs (primary keys, basically)

## Other tools used:

- [Bulma](https://bulma.io/) - CSS Framework so it looks half decent
- [Axios](https://github.com/axios/axios) - Makes fetch request code less ugly to look at
- [Gemini](https://gemini.google.com/) - Generating a few mock comments for this sample.

## Features

Accepts an argument for what port to listen to—default is 3000. \
Any changes made will be saved to `comments.json`. \
\
**Remember to install dependencies with `npm i`!**

| Request | URL | Path Parameters | Body Parameters
| --- | --- | --- | --- |
| `GET` Get all comments                 | `/comments`         |                     |
| `GET` Get a comment                    | `/comments/{id}`    | `ID` of the comment |
| `GET` Form for creating a new comment  | `/comments/new`     |                     |
| `POST` Create a new comment            | `/comments`         |                     | `username`, `comment` 
| `PATCH` Edit a comment                 | `/comments/{id}`    | `ID` of the comment | `comment`             
| `DELETE` Delete a comment              | `/comments/{id}`    | `ID` of the comment |                        
 
## Cool tips if you're a newbie web developer exploring this project

- Use an API platform like [HoppScotch](https://hoppscotch.io/) to test the API. I highly recommend using the desktop app over the web version so it's easy to access localhost.
- Install [nodemon](https://www.npmjs.com/package/nodemon) and execute index.js with `nodemon index.js` or `nodemon` to automatically restart your server when changes are made to the code.

