# Seismic Intel: AI-Powered Earthquake Prediction System

An end-to-end Machine Learning project that predicts earthquake magnitude and depth using a Deep Neural Network, served via a FastAPI backend and visualized on a premium React scientific dashboard.

## 🔬 Project Vision
Built as an **AI/ML integration project**, this system demonstrates the full lifecycle of a machine learning application: from data preprocessing and hyperparameter tuning to real-time inference and data visualization.

---

## 🧠 AI/ML Architecture

### 1. Data Preprocessing & Feature Engineering
- **Dataset**: Historical seismic data from `database.csv`.
- **Feature Engineering**: Raw Date and Time strings are converted into **Unix Timestamps** to provide a continuous numerical feature for temporal analysis.
- **Input Dimensions**: 3 Features (`Timestamp`, `Latitude`, `Longitude`).
- **Output Dimensions**: 2 Targets (`Magnitude (M_w)`, `Depth (KM)`).

### 2. Model Design (Keras/TensorFlow)
The core prediction engine is a **Multi-Layer Perceptron (MLP)** built with Keras:
- **Input Layer**: Dense layer matching input features.
- **Hidden Layers**: Multiple Dense layers with **ReLU** activation for non-linear pattern recognition.
- **Output Layer**: Dense layer with 2 neurons (Regression) to predict magnitude and depth simultaneously.
- **Optimizer**: Adam (Adaptive Moment Estimation).
- **Loss Function**: Mean Squared Error (MSE).

### 3. Hyperparameter Optimization
- **Automation**: Utilized `GridSearchCV` via the `scikeras` wrapper to find the optimal configuration.
- **Search Space**: Explored different neuron counts (`16, 64, 128`), batch sizes, and activation functions to minimize regression error.
- **Persistence**: The best-performing estimator is serialized as `seismic_model.pkl` for production inference.

---

## 🏗️ Technical Stack

### AI/ML Core (Python)
- **Framework**: TensorFlow 2.x & Keras
- **Sklearn Integration**: Scikeras (Keras Regressor)
- **Analysis**: Pandas, NumPy, Scikit-Learn
- **Visualization**: Matplotlib, Basemap

### Production Backend (FastAPI)
- **Engine**: FastAPI (High-performance ASGI framework)
- **Serialization**: Joblib (Efficient loading of large model pickles)
- **Real-time API**: POST `/predict` endpoint handles feature normalization and model inference.
- **CORS**: Configured for secure frontend-backend communication.

### Scientific Dashboard (React)
- **Architecture**: React 18 + TypeScript + Vite
- **Styling**: Vanilla CSS with a "Zero-Radius Brutalist" aesthetic.
- **Geospatial**: Leaflet & React-Leaflet with DarkMatter topographic tiles.
- **Motion**: Framer Motion for seismic wave animations.

---

## 🚀 Getting Started

### 1. Model Training & Preparation
Run the training script to preprocess data and generate the model weights:
```bash
python model_training.py
```
*Note: This generates `seismic_model.pkl` used by the backend.*

### 2. Start the Inference Server (Backend)
```bash
source venv/bin/activate
export PYTHONPATH=$PYTHONPATH:.
python3 -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

### 3. Start the Dashboard (Frontend)
```bash
cd frontend
npm install
npm run dev
```
Accessible at: `http://localhost:5173/`

---

## 📈 Dashboard Features
- **Live Tilemetry**: Real-time visualization of model confidence and risk levels.
- **Target Coordinate HUD**: Dynamic map tracking with localized seismic markers.
- **Risk Analysis**: Algorithmic classification of regional threats based on predicted magnitude.

---
**Domain**: Geophysics & Predictive Analytics
