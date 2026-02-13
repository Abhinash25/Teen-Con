
# Teencon Event Management Platform

## Tech Stack
- **Frontend**: React 18, Tailwind CSS, Framer Motion, Lucide Icons, React Router.
- **Backend**: Node.js, Express, MongoDB, JWT, Bcrypt.

## Local Setup

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or via Atlas)

### 1. Frontend Setup
1. Open the project directory.
2. The provided `index.tsx` and components represent a full SPA.
3. If running in a standard Vite/Next environment:
   ```bash
   npm install lucide-react framer-motion react-router-dom
   npm run dev
   ```

### 2. Backend Setup
1. Create a `server/` folder.
2. Place the provided Express code (`index.js`, models) inside.
3. Install dependencies:
   ```bash
   npm install express mongoose cors dotenv jsonwebtoken bcryptjs
   ```
4. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```
5. Start server: `node server/index.js`

## Design Decisions
- **Typography**: Used 'Plus Jakarta Sans' for a modern, Gen-Z feel.
- **Color Palette**: Deep slate backgrounds with vibrant purple (Teencon logo color) and teal accents.
- **Visuals**: Abstract energetic shapes and large rounded corners (2.5rem+) to avoid a corporate look.
- **Animations**: Subtle reveal animations for stats and cards to keep the site feeling interactive.
