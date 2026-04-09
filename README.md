# 🌦️ Weather App 

A simple and responsive weather application that fetches real-time weather data using the OpenWeatherMap API. Users can search weather details using either a **city name** or an **Indian pincode**.

---

## 🚀 Features

* 🌍 Get weather by **city name**
* 📍 Get weather by **pincode (India)**
* 🌡️ Displays temperature in Celsius
* ☁️ Shows weather description (clear, cloudy, etc.)
* ⚠️ Error handling for invalid input
* ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript (Vanilla JS)
* OpenWeatherMap API

---

## 📌 How It Works

### 🔹 City-Based Search

1. User enters a city name
2. App calls weather API directly
3. Displays temperature and weather description

---

### 🔹 Pincode-Based Search

1. User enters a pincode
2. App converts pincode → latitude & longitude (Geocoding API)
3. Uses coordinates to fetch weather data
4. Displays results

---

## 🔑 API Used

* Geocoding API (for pincode → coordinates)
* Weather API (for weather details)

👉 You need to generate your API key from:
https://openweathermap.org/api

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to project folder:

```bash
cd weather-app
```

3. Open `script.js` and replace:

```js
const API_KEY = "YOUR_API_KEY";
```

4. Run the project:

* Open `index.html` in your browser

---

## 🧪 Usage

* Enter a **city name** (e.g., Delhi, Mumbai)
* OR enter a **6-digit pincode** (e.g., 110001)
* Click **Get Weather**
* View results instantly

---

## ❗ Error Handling

* Shows error message if:

  * City not found
  * Invalid pincode
  * API fails

---

## 📸 Future Improvements

* 🌐 Add GPS location support
* 📅 5-day weather forecast
* 🎨 Better UI/UX design
* ⏳ Loading spinner
* 🌙 Dark mode

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* OpenWeatherMap API for providing weather data

---
