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

please create an .env file in root of contact-app and put inside: 

DATABASE_URL="file:./dev.db"
FIREBASE_API_KEY="AIzaSyCzyQeBaFDOeAbL_2OUwIODeDiDChaeyCc"

## How to use

All CRUD operations are working. I should've use Strapi but SQLite was a demand so I did it with PRISMA ORM, and for image handeling i used Firebase Storage. 

The communication is validated between them so if you delete a record the image will be deleted from firebase as well ect.

I did not implement User Auth or additional settings or dark/light mode switch.


