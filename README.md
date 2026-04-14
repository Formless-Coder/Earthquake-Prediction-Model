# Earthquake Prediction Model

A neural network-based model for predicting earthquake magnitude and depth using historical seismic data.

## Overview

This project uses a Keras/TensorFlow neural network to predict earthquake characteristics (magnitude and depth) based on location (latitude, longitude) and timestamp data. The model is trained on a dataset of global earthquakes and uses grid search for hyperparameter tuning.

## Features

- Data preprocessing and visualization (world map of earthquake locations)
- Neural network architecture with customizable layers
- Hyperparameter optimization using GridSearchCV
- Regression model for continuous prediction of magnitude and depth

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Formless-Coder/Earthquake-Prediction-Model.git
   cd Earthquake-Prediction-Model
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. (Optional) Set up a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

## Usage

Run the model training script:
```
python model_training.py
```

This will:
- Load and preprocess the data
- Train the neural network with grid search
- Evaluate the model on test data
- Output predictions and metrics

## Data

- **Source**: `database.csv` (historical earthquake data)
- **Features**: Timestamp, Latitude, Longitude
- **Targets**: Magnitude, Depth
- **Preprocessing**: Converts date/time to Unix timestamp, handles missing values

## Model Architecture

- **Type**: Regression Neural Network
- **Layers**: Dense layers with ReLU activation
- **Output**: 2 neurons (for magnitude and depth)
- **Loss**: Mean Squared Error
- **Optimizer**: Adam
- **Metrics**: Mean Absolute Error

## Results

- Best model parameters found via grid search
- Test MSE: ~5.19 million (example from training)
- Sample predictions provided in the output

## Dependencies

- TensorFlow/Keras
- Scikit-learn
- Pandas
- NumPy
- Matplotlib
- Basemap

See `requirements.txt` for full list.

## Contributing

Feel free to fork and submit pull requests. For major changes, please open an issue first.

## License

This project is open-source. Use at your own risk.