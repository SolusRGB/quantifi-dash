# Quantifi Dashboard

Quantifi is a centralized dashboard for investors and collectors to access comprehensive analytics and visualizations for cryptocurrency and NFT data. This platform integrates with various real-time data sources from cryptocurrency APIs and NFT marketplaces to provide users with up-to-date information to make informed investment decisions.

## Features

- User Authentication via Discord with Next Auth.
- Real-time charts and data integration from Trading View.
- NFT collection and detail fetching from MagicEden API.
- Latest blockchain, DeFi, and NFT news through a news API.
- Investment project search and overview.
- Customizable user preferences for news and project alerts.

## System Requirements

- Node.js (version 14.0 or higher recommended)
- npm (bundled with Node.js) or Yarn as a package manager

## Getting Started

Follow these instructions to get your copy of Quantifi up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Git
- Node.js
- npm or Yarn

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/SolusRGB/quantifi-dash.git
   cd quantifi-dash
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. Set up environment variables
   If there isn't a `.env` file in the root directory, create one.

   ```sh
   mkdir .env
   ```

   Fill in the environment variables in the `.env` file with the variables applied in the report.

4. **Start the Development Server**

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```
