# ☁️ WeatherMe - Modern Weather Application

<div align="center">
  <img src="public/Group 48.png" alt="WeatherMe Logo" width="120" />
  <h3>A beautiful, responsive weather application built with Next.js</h3>
  <p>Get real-time weather updates with a sleek, modern interface</p>
  
  <img src="public/search.png" alt="WeatherMe App Screenshot" width="80%" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
</div>

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any location worldwide
- **Detailed Forecasts**: View hourly and 7-day weather forecasts with temperature trends
- **Responsive Design**: Optimized for all devices - mobile, tablet, and desktop
- **Beautiful UI**: Modern, intuitive interface with a sleek purple gradient theme
- **Comprehensive Weather Metrics**: 
  - Temperature (current, min, max)
  - Humidity percentage
  - Wind speed in km/h
  - Visibility distance in km
  - Air pressure in hPa
- **Smart Location Search**: Easily search for any city or location globally
- **Tomorrow's Forecast**: Dedicated page for tomorrow's detailed weather information
- **Astronomical Data**: Sunrise and sunset times for better day planning
- **Rain Probability**: Daily chance of rain to help plan outdoor activities

## 🚀 Tech Stack

- **Frontend Framework**: 
  - [Next.js 15](https://nextjs.org/) - The React framework for production
  - [React 19](https://react.dev/) - Latest version with improved performance
- **Styling**: 
  - [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS framework
  - Custom gradients and responsive design
- **Data Fetching**: 
  - [WeatherAPI](https://www.weatherapi.com/) - Comprehensive weather data
  - Client-side data fetching with React hooks
- **Typography & UI**: 
  - [Geist](https://vercel.com/font) - Modern, clean font family from Vercel
  - Custom UI components with responsive breakpoints
- **State Management**: 
  - React Context API - For global application state
  - Custom hooks for weather data and search functionality

## ☁️ Weather API Integration

The application uses [WeatherAPI.com](https://www.weatherapi.com/) to fetch comprehensive weather data:

```javascript
// Example API call from our context
useEffect(() => {
  const API_KEY = 'your_api_key'; 
  
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
    .then(res => res.json())
    .then(data => setWeather(data))
    .catch(err => console.error('Weather API error:', err));
}, [city]);
```

The API provides:
- Current weather conditions
- 7-day weather forecast
- Hourly forecast data
- Astronomical data (sunrise/sunset)
- Air quality metrics
- Weather alerts and warnings

## 📋 Project Structure

```
/
├── public/                  # Static assets
│   ├── Group 48.png         # Logo image
│   ├── TEMPERATURE.png      # Temperature icon
│   ├── search.png           # Search icon
│   ├── LocationIcon.png     # Location marker icon
│   ├── humidity.svg         # Humidity icon
│   └── 50d.png              # Weather condition icon
│
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Forecast.js          # Forecast component for tomorrow page
│   │   │   ├── Navbar.js            # Navigation component
│   │   │   ├── WeatherForecast.js   # Weekly forecast component
│   │   │   └── weatherWrapper.js    # Context provider wrapper
│   │   │
│   │   ├── context/        # State management
│   │   │   └── context.js  # Weather context with API integration
│   │   │
│   │   ├── tommorow/       # Tomorrow's forecast page
│   │   │   └── page.js     # Tomorrow page component
│   │   │
│   │   ├── globals.css     # Global styles and Tailwind utilities
│   │   ├── layout.js       # Root layout with font configuration
│   │   └── page.js         # Home page with current weather
│
├── .next/                   # Next.js build output
├── package.json             # Project dependencies and scripts
├── next.config.mjs          # Next.js configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- A free API key from [WeatherAPI](https://www.weatherapi.com/signup.aspx)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weatherme.git
   cd weatherme
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```bash
   # Windows
   echo NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here > .env.local
   
   # macOS/Linux
   echo "NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here" > .env.local
   ```
   
   Replace `your_api_key_here` with your WeatherAPI key. You can get a free API key by signing up at [WeatherAPI](https://www.weatherapi.com/signup.aspx).

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.
   
   The application should now be running with full functionality, displaying weather data for the default location (Faridabad).

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

This will generate optimized static files and start a production server at [http://localhost:3000](http://localhost:3000).

## 📱 Application Pages

### Home Page (Today's Weather)
The main dashboard displays current weather information:

- **Header Section**: Navigation bar with app logo and current time
- **Search Bar**: Search for any location worldwide
- **Weather Card**: 
  - Current temperature with weather condition icon
  - Location name with date display
  - Weather condition description (e.g., "Partly Cloudy")
- **Metrics Panel**:
  - Humidity percentage
  - Visibility distance in kilometers
  - Air pressure in hectopascals (hPa)
  - Wind speed in kilometers per hour
- **Hourly Forecast**: Scrollable cards showing weather conditions for the next 6 hours

### Tomorrow's Weather Page
A dedicated page for planning your next day:

- **Tomorrow Overview**: 
  - Average temperature forecast
  - Weather condition summary
  - Date information
- **Air Conditions Panel**:
  - Average humidity forecast
  - Expected visibility
  - Predicted wind speed
- **Astronomical Data**:
  - Sunrise time
  - Sunset time
  - Chance of rain percentage
- **Hourly Breakdown**: Selected hours of tomorrow with condition icons
- **Weekly Forecast**: Extended 7-day forecast with:
  - Day of week
  - Weather condition icons
  - Maximum and minimum temperatures
  - Humidity and wind information

## 📐 Responsive Design

The application is fully responsive with optimized layouts for:

### Mobile View (< 640px)
- Compact weather card
- Stacked layout for search and metrics
- Smaller font sizes and icons
- Scrollable content sections

### Tablet View (640px - 1024px)
- Medium-sized weather card
- Semi-compact layout with optimized spacing
- Adjusted font sizes for readability
- Partially stacked components

### Desktop View (> 1024px)
- Full-sized weather card with expanded metrics
- Side-by-side layout for main components
- Optimal spacing and typography
- Enhanced visual elements

### Extra Large Screens (> 1800px)
- Maximized layout with additional padding
- Larger font sizes and component spacing
- Optimized for widescreen displays

## 🎨 UI Components

### Core Components

- **Navbar** (`Navbar.js`): 
  - Navigation links between Today and Tomorrow views
  - Real-time clock display using `toLocaleTimeString`
  - Responsive logo and navigation elements
  - Active page indicator with animated underline

- **Weather Card** (`page.js`): 
  - Main component displaying current weather conditions
  - Dynamic background gradient with purple accents
  - Animated temperature and condition display
  - Responsive layout with adaptive sizing

- **Forecast** (`Forecast.js`): 
  - Comprehensive weather forecast display
  - Tomorrow's weather overview section
  - Air conditions and astronomical data panels
  - Weekly forecast with day-by-day breakdown

- **Search** (integrated in multiple components): 
  - Location search with elegant styling
  - Gradient button with hover effects
  - Responsive input field with placeholder
  - Instant results on submission

### Helper Components

- **WeatherForecast** (`WeatherForecast.js`):
  - Weekly forecast display with day names
  - Temperature ranges (min/max)
  - Condition icons and descriptions
  - Humidity and wind indicators

- **DateDisplay** (embedded in `page.js`):
  - Formatted date display using `Intl.DateTimeFormat`
  - Custom styling with vertical divider
  - Responsive positioning

- **TimeDisplay** (embedded in `Navbar.js`):
  - Real-time clock display
  - 24-hour format for global audience
  - Automatic updates

## 🔄 State Management

The application uses React Context API for global state management:

```jsx
// WeatherContext.js
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('faridabad');
  const [weather, setWeather] = useState({});
  const [hours, setHours] = useState('');
  
  // API fetching logic and other state management
  
  return (
    <WeatherContext.Provider value={{
      search, setSearch, city, setCity,
      weather, setWeather, hours, setHours,
      handleChange, searchByText
    }}>
      {children}
    </WeatherContext.Provider>
  );
};
```

Key state management features:
- **Weather Data**: Centralized storage of API response data
- **Location Management**: Current city and search query handling
- **Time Tracking**: Current hour for hourly forecast display
- **Search Functionality**: Methods for updating location based on user input

## 📦 Deployment

### Vercel Deployment (Recommended)

The easiest way to deploy this application is using Vercel:

1. Fork or clone this repository to your GitHub account
2. Connect your GitHub repository to Vercel
3. Configure environment variables (add your WeatherAPI key)
4. Deploy with a single click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fweatherme)

### Alternative Deployment Options

**Static Export**:
```bash
npm run build
npm run export
```
This generates a static version in the `out` directory that can be deployed to any static hosting service.

**Docker Deployment**:
```bash
# Build the Docker image
docker build -t weatherme .

# Run the container
docker run -p 3000:3000 -e NEXT_PUBLIC_WEATHER_API_KEY=your_api_key weatherme
```

## 🔮 Future Enhancements

Potential features for future development:

- **Dark/Light Mode Toggle**: Allow users to switch between theme preferences
- **Weather Alerts**: Notifications for severe weather conditions
- **Location Geolocation**: Automatically detect user's location
- **Historical Weather Data**: View past weather patterns
- **Weather Maps**: Interactive maps showing weather patterns
- **Multiple Locations**: Save and switch between favorite locations
- **Weather Widgets**: Embeddable widgets for other websites

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons and design inspiration from various open-source projects
- Built with [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)
- Special thanks to the open-source community for their invaluable resources and tools
