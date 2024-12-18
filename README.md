
<h1 align="center">
Coffee Spot: an Application Focused on Finding Third Spaces
</h1>
<p align="center">
   Created by: CSC648-01-FA24-team03
</p>

<div align="center">
   <img src="Milestones/M1/logo.png" alt="Coffee Spot Logo" width="256" align="center"/>
</div>

---

# Application URL  
**[https://csc648-01-fa24-csc648-01-fa24-team03-duplicate-w53a.vercel.app/](https://csc648-01-fa24-csc648-01-fa24-team03-duplicate-w53a.vercel.app/)**  

# YouTube Demo URL  
**[https://youtu.be/eGtjtS4Tjgc](https://youtu.be/eGtjtS4Tjgc/)**

## Milestone 0
**Link to Milestone 0 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M0/>**

## Milestone 1
**Link to Milestone 1 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M1/>**

## Milestone 2
**Link to Milestone 2 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M2/>**

## Milestone 3
**Link to Milestone 3 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M3/>**

## Milestone 4
**Link to Milestone 4 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M4/>**

## Milestone 5
**Link to Milestone 5 Documentation: <https://github.com/TimmyTram/Coffee-Spot/tree/main/Milestones/M5/>**

## Team Members
| Student Name       | Student Email        | GitHub Username              | Student's role    |
| :----------:       | :-----------:        | :-------------:              | :------------:    |
|   Miguel Logarta   | mlogarta@sfsu.edu    | Miguel-Antonio-Logarta       |  Team Leader      |
|   Alan Yu          | ayu20@sfsu.edu       | Section09                    |  Scrum Master     |
|   Timmy Tram       | ttram2@sfsu.edu      | TimmyTram                    |  Back-end Lead    |
|   Halia Tavares    | htavares1@sfsu.edu   | s000p                        |  Front-end        |
|   Diane Blise      | dbilse@sfsu.mail.edu | dianemb                      |  Front-end        |
|   John Bagwell     | jbagwell@sfsu.edu    | sweartypalms                 |  Back-end         |
|   Su Tun           | stun@sfsu.edu        | suyeetun                     |  GitHub Master    |

----

## Environment Variables

```env
DATABASE_URL="Mongodb Url here"
NEXT_PUBLIC_API_URL="URL of the backend API"
NEXTAUTH_SECRET="openssl rand -base64 32"
BLOB_READ_WRITE_TOKEN="token here"
NEXT_PUBLIC_GOOGLE_API_KEY="google maps public api key here"
```

## Run Instructions

1. Clone the repository:
```bash
git clone https://github.com/TimmyTram/Coffee-Spot.git
```

2. Navigate to the application directory:
```bash
cd .\Coffee-Spot\application\   
```

3. Install dependencies:
```bash
npm install
```

4. Create and fill out the ```.env.local``` file with the required environment variables [Check Environment Variables](#environment-variables)

5. Generate Prisma Client:
```bash
npx prisma generate
```

6. Start the Development Server:
```bash
npm run dev
```