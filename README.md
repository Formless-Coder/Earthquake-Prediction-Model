# Earthquake Prediction Model

A neural network-based model for predicting earthquake magnitude and depth using historical seismic data, featuring a professional, enterprise-grade scientific dashboard.

## Overview

This project consists of two main components:
1. **Seismic Prediction Engine**: A Keras/TensorFlow neural network that predicts earthquake characteristics based on location and timestamp data.
2. **SEISMIC_INTEL Dashboard**: A high-fidelity, data-dense React frontend for visualizing predictions and seismic telemetry.

## Features

- **Advanced Modeling**: Neural network with customizable layers and hyperparameter optimization using GridSearchCV.
- **Enterprise UI/UX**: Premium SaaS-style dashboard with dark-mode, data-dense design system.
- **Interactive Mapping**: Live seismic tracking using Leaflet with custom dark-matter topographic mapping.
- **Real-time Visuals**: Dynamic magnitude metrics, risk analysis waveforms, and telemetry pulses.

---

## Technical Stack

### Backend & AI
- **Framework**: TensorFlow / Keras
- **Data Science**: Pandas, NumPy, Scikit-learn
- **Visualization**: Matplotlib, Basemap

### Frontend (SEISMIC_INTEL)
- **Core**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS (Premium Design System)
- **Mapping**: Leaflet + React-Leaflet
- **Animations**: Framer Motion
- **Icons**: Lucide-React

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Formless-Coder/Earthquake-Prediction-Model.git
cd Earthquake-Prediction-Model
```

### 2. Backend Setup
1. (Optional) Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Model Training
From the root directory:
```bash
python model_training.py
```
This script preprocesses the `database.csv`, tunes hyperparameters, and evaluates the model.

### Running the Dashboard
From the `frontend/` directory:
```bash
npm run dev
```
The dashboard will be available at `http://localhost:5173/`.

---

## Data Source
- **`database.csv`**: Contains historical earthquake data with features like Timestamp, Latitude, and Longitude, and targets like Magnitude and Depth.

## License
This project is open-source. Use at your own risk.