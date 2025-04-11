import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global styles here
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals'; // Optional: For performance reporting

// Import the Datadog RUM package
import { datadogRum } from '@datadog/browser-rum';

// Initialize Datadog RUM
datadogRum.init({
  applicationId: 'f67bbc76-0fef-4b59-8216-4c1dfe9529ed', // Replace with your actual application ID
  clientToken: 'pub13e59aac1194011a94fac43ebaf60446', // Replace with your actual client token
  site: 'us5.datadoghq.com', // Datadog site
  service: 'application', // Your service name
  env: 'dev', // Environment name
  sessionSampleRate: 100, // Session sample rate (100 means all sessions will be tracked)
  sessionReplaySampleRate: 100, // Session replay sample rate (100 means all sessions will be replayed)
  defaultPrivacyLevel: 'mask-user-input', // Mask sensitive user input for privacy
});

// Render the React app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: For performance metrics
reportWebVitals();


