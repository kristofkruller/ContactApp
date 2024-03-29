# INITIALIZING PROJECT

Please follow the terminal commands below:

git clone https://github.com/kristofkruller/ContactApp.git

cd ./ContactApp/contact-app

npm i 

this will install all the dependencies as 

  "dependencies": {
    "next": "latest",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^5.3.5"
  },
  "devDependencies": {
    "@prisma/client": "^4.9.0",
    "@types/node": "^18.0.0",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "@types/styled-components": "^5.1.25",
    "firebase": "^9.17.1",
    "prisma": "^4.9.0",
    "sqlite3": "^5.1.4",
    "typescript": "^4.9.5"
  }

first backend starts with `npx prisma studio`
.then `npm run dev` for frontend

## How to use

All CRUD operations are working. Serverless SQLite with PRISMA ORM, and for image handeling i used Firebase Storage and for Auth Firebase Auth. 
The communication is validated between them so if you delete a record the image will be deleted from firebase as well ect.

**Useflow methods:**    
```
create -> full (img change option as well)
create -> inputs full without img
update -> any field or img (change or delete)
delete full
```
By image upload i put a submit step in, to prevent unwanted uploads, so pick an img and after that you should submit to be uploaded
*Only allow uploads of any image file that's less than 5MB and the user signed in*
