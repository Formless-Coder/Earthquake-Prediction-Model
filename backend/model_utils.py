from keras.models import Sequential
from keras.layers import Dense

def create_model(**kwargs):
    neurons = kwargs.get('neurons', 16)
    activation = kwargs.get('activation', 'relu')
    optimizer = kwargs.get('optimizer', 'adam')
    loss = kwargs.get('loss', 'mean_squared_error')

    model = Sequential()
    model.add(Dense(neurons, activation=activation, input_shape=(3,)))
    model.add(Dense(neurons, activation=activation))
    model.add(Dense(2))

    model.compile(optimizer=optimizer, loss=loss, metrics=['mae'])

    return model
