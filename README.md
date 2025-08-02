```markdown
# ✂️ Hair Day - Scheduling System

A modern web application for hair salon appointment management, built with vanilla JavaScript and Webpack.

## 📋 Description

**Hair Day** is a complete scheduling system that allows users to:
- Schedule hair cutting appointments
- View appointments by period (morning, afternoon, evening)
- Cancel existing appointments
- Automatically manage available time slots

## ✨ Features

### ��️ Scheduling
- Date selection through calendar
- Available time slot selection by period
- Client name registration
- Form validation

### 📊 Visualization
- Appointment list organized by period
- Real-time display of occupied time slots
- Intuitive interface with visual icons

### 🗑️ Cancellation
- Appointment cancellation with confirmation
- Automatic list update after cancellation

### ⏰ Smart Time Management
- Automatic filtering of past time slots
- Exclusion of already scheduled time slots
- Organization by periods (Morning: 9am-12pm, Afternoon: 1pm-6pm, Evening: 7pm-9pm)

## ��️ Technologies Used

- **JavaScript ES6+** - Main language
- **Webpack** - Bundler and dev server
- **Day.js** - Date manipulation
- **JSON Server** - Simulated REST API
- **CSS3** - Modern styling
- **HTML5** - Semantic structure

## 📁 Project Structure

```
hairday-template-main/
├── src/
│   ├── assets/          # Icons and images
│   ├── libs/           # External libraries
│   ├── modules/        # Application modules
│   │   ├── form/       # Form functionalities
│   │   └── schedules/  # Schedule management
│   ├── services/       # API services
│   ├── styles/         # CSS files
│   └── utils/          # Utilities
├── index.html          # Main page
├── server.json         # API data
├── package.json        # Dependencies
└── webpack.config.js   # Webpack configuration
```

## �� How to Run

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd hairday-template-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the data server (API)**
```bash
npm run server
```

4. **In another terminal, start the development server**
```bash
npm run dev
```

5. **Access the application**
```
http://localhost:8080
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Generate production build
- `npm run server` - Start JSON Server (API)

## 🔧 API Configuration

The application uses **JSON Server** as a simulated API:

- **Base URL**: `http://localhost:3333`
- **Endpoint**: `/schedules`
- **Port**: 3333
- **Data file**: `server.json`

### API Data Example:
```json
{
  "schedules": [
    {
      "id": 1754072933932,
      "name": "John Silva",
      "when": "2025-01-15T10:00:00.000Z"
    }
  ]
}
```

## �� Technical Features

### Main Modules

#### 📅 Scheduling Form
- Date and time validation
- Dynamic loading of available time slots
- Asynchronous data submission

#### 📊 Appointment Visualization
- Dynamic rendering by period
- Real-time updates
- Robust error handling

#### 🗑️ Cancellation
- Action confirmation
- API removal
- Automatic interface update

## 🎨 Interface

The application features a modern and responsive interface with:

- **Clean Design**: Clean and intuitive interface
- **Visual Icons**: Clear representation of periods
- **Visual Feedback**: Loading and error states
- **Responsiveness**: Adaptation to different screens

## 🔍 Debugging

To debug issues:

1. **Check browser console** (F12)
2. **Confirm server is running** at `http://localhost:3333`
3. **Check application logs**
4. **Test API directly**: `http://localhost:3333/schedules`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.

## 👩🏻‍💻 Author

**Bel Borba** - Front End Developer

---

⭐ If this project helped you, consider giving it a star!
```
