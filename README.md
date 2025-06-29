QualtiaPlay
QualtiaPlay is a customer loyalty platform developed during the uOttaHack 6 x i-Hack Mty 2025 Hackathon, winning 1st place overall out of 600+ participants. It features a digital token rewards system that transforms customer engagement through interactive experiences and real-time redemption capabilities. The platform combines React-based frontend with a modular Node.js backend and fine-tuned AI chatbot, achieving a projected 27% boost in customer loyalty through advanced engagement analytics.
Features

Digital Token Rewards System: Real-time token earning and redemption for discounts, products, and exclusive offers.
QR Code Integration: Seamless product-to-platform connection through embedded QR codes on Qualtia products.
Interactive Platform: Engaging user experiences designed to maximize customer retention and brand loyalty.
Mission-Based Engagement: Daily and weekly challenges providing additional reward opportunities.
Quali Bot: Fine-tuned Gemini LLM chatbot answering customer queries with context-aware responses.
Analytics Dashboard: Advanced engagement tracking and behavior analytics for customer loyalty insights.

Tech Stack
Frontend

React.js – Interactive user interface with component-based architecture for rewards management and customer dashboard.

Backend

Node.js & Express.js – Modular server architecture handling QR processing, token logic, and reward management APIs.

Database

MySQL – Relational database storing user profiles, transaction history, and engagement analytics.

AI Integration

Gemini LLM – Fine-tuned language model powering customer support chatbot with specialized reward logic knowledge.

Integration

RESTful APIs – Seamless communication between frontend and backend services.

Installation
Prerequisites

Node.js 16.0+ - Required for backend services and React development
MySQL 8.0+ - For database management and analytics storage
React 18.0+ - Frontend framework for interactive user interface

Quick Start

Clone the repository
bashgit clone https://github.com/your-org/qualtiaplay.git
cd qualtiaplay

Backend Setup
bashcd backend
npm install

# Configure environment variables
cp .env.example .env
# Add your database credentials and Gemini API key

# Start the server
npm start

Frontend Setup
bashcd frontend
npm install
npm run dev

Database Configuration
sqlCREATE DATABASE qualtiaplay;
-- Run migration scripts
npm run migrate

Access the platform

Open your web browser and navigate to: http://localhost:3000
The React interface will load with rewards dashboard and customer portal



Platform Configuration
The platform can be customized through admin interface:

Token Rates: Adjust earning rates per activity and engagement type
Reward Catalog: Configure available products and discount tiers
Mission Settings: Set daily/weekly challenge parameters and rewards
Engagement Parameters: Modify platform interactions for optimal customer retention

File Structure
qualtiaplay/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components for rewards and UI
│   │   ├── pages/          # Main platform pages
│   │   └── utils/          # Helper functions and API calls
├── backend/
│   ├── routes/             # Express.js API routes
│   ├── models/             # Database models and schemas
│   ├── controllers/        # Business logic controllers
│   └── middleware/         # Authentication and validation
├── database/
│   ├── migrations/         # Database schema migrations
│   └── seeds/              # Initial data setup
└── README.md               # This file
Running Different Components
1. Development Mode
bash# Start backend server
cd backend && npm run dev

# Start frontend (in new terminal)
cd frontend && npm run dev
2. Production Build
bash# Build frontend for production
cd frontend && npm run build

# Start production server
cd backend && npm start
3. Database Operations
bash# Run migrations
npm run migrate

# Seed initial data
npm run seed

# Reset database (development only)
npm run db:reset
Platform Controls
Once the platform is running:

User Registration: QR code scan leads to automatic account creation
Platform Access: Customer dashboard and rewards portal available from main interface
Token Management: Real-time token balance and transaction history
Reward Redemption: Instant processing of token-to-reward conversions
Mission Tracking: Progress monitoring for daily/weekly challenges
Quali Bot: 24/7 customer support through chat interface

Business Integration
For deployment with Qualtia products:

QR Code Generation: Batch creation of unique QR codes for product integration
Inventory Sync: Real-time connection with Qualtia's product catalog
Analytics Integration: Customer behavior data export for business intelligence
Reward Fulfillment: Integration with Qualtia's distribution and discount systems

Troubleshooting
Common Issues:

Port 3000 already in use: Change the port in package.json or kill existing processes
Database connection failed: Verify MySQL credentials and service status
Gemini API errors: Check API key validity and rate limits
Platform not loading: Clear browser cache and check JavaScript console

Performance Optimization:

Implement Redis caching for frequent database queries
Optimize platform assets and loading times
Use CDN for static asset delivery
Monitor API response times and database query performance
