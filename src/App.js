import React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import './base.css'; // eslint-disable-line import/no-unassigned-import

const Div = Animated.createAnimatedComponent('div');

class App extends React.Component {
  state = {
    rotation: new Animated.Value(10),
  };

  componentWillMount() {
    this.interpolate = this.state.rotation.interpolate({
      inputRange: [-800, 0, 800],
      outputRange: ['-360deg', '0deg', '360deg'],
    });
  }

  _handleClick = () => {
    Animated.decay(this.state.rotation, { velocity: 1 }).start();
  };

  render() {
    return (
      <Div
        style={{
          height: this.state.rotation,
          width: this.state.rotation,
          backgroundColor: '#757575',
          transform: [
            {
              rotate: this.interpolate,
            },
          ],
        }}
        onClick={this._handleClick}
      />
    );
  }
}

export default App;
