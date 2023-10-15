import React, { Component } from 'react';
import './Style1.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,      // To control the visibility of the color list
      selectedColor: null // To store the selected color
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isOpen: false // Hide the color list when a color is selected
    });
  };

  render() {
    const { colors } = this.props;
    const { isOpen, selectedColor } = this.state;

    const pageStyle = {
      backgroundColor: selectedColor || 'transparent',
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0
    };

    return (
      <div style={pageStyle}>
        <h1>Color Picker</h1>
        <div className="color-picker">
          {isOpen && (
            <div className="color-list">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-square"
                  style={{ backgroundColor: color }}
                  onClick={() => this.selectColor(color)}
                ></div>
              ))}
            </div>
          )}
          
          <button onClick={this.toggleColorList} style={{color:"white",backgroundColor:"green",border:"none",cursor:"pointer"}}>Pick a color</button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;