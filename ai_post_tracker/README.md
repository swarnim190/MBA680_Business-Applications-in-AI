# 7 Days of AI Tracker

A simple web application designed to help users track their daily AI learning progress over a 7-day period.

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
This is a client-side only application with no backend requirements. All data is stored in the browser's memory and persists only during the current session.

## Features

1. **Daily Progress Tracking**
   - Users can post updates about their AI learning progress
   - Each post is timestamped and displayed in reverse chronological order
   - Limited to 7 posts (one per day)

2. **Visual Progress Tracker**
   - Interactive checkboxes to mark completed days
   - Day counter that updates automatically
   - Visual feedback for completed days

3. **User Interface**
   - Clean and modern design
   - Responsive layout
   - University of Louisville branding
   - Social media hashtags integration

## How to Use

1. Open `index.html` in any modern web browser
2. Enter your daily AI learning progress in the text area
3. Click "Post Update" to submit your progress
4. Watch your progress tracker update automatically
5. The application will track up to 7 days of progress


## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone hhttps://github.com/swarnim190/MBA680_Business-Applications-in-AI.git
   cd 7-days-of-ai-tracker
   ```

2. **Run locally**
   - Option 1: Simply open the `index.html` file in your web browser
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```
   
   - Option 2: Use a local development server
     - With Python:
     ```bash
     # Python 3
     python -m http.server
     
     # Python 2
     python -m SimpleHTTPServer
     ```
     Then open `http://localhost:8000` in your browser
     
     - With Node.js (requires npm and http-server package):
     ```bash
     npm install -g http-server
     http-server
     ```
     Then open `http://localhost:8080` in your browser

3. **No build process required**
   - This is a vanilla JavaScript application with no build steps
   - Changes to HTML, CSS, or JavaScript files will be immediately available on page refresh

## Project Structure

- `index.html` - Main HTML file containing the application structure
- `style.css` - CSS styles for the application
- `script.js` - JavaScript functionality for posting updates and tracking progress
- `uofl_correct_logo.png` - University of Louisville logo

## Notes

- This is a simple client-side application
- Progress is not persisted between browser sessions
- Designed for tracking a 7-day AI learning challenge
- Includes University of Louisville branding and relevant hashtags 