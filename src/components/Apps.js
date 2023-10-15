import React from 'react';
import ColorPicker from './colorpicker';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "purple","orange","violet","black","pink","skyblue","lightgreen","darkviolet","lightyellow","gray","aqua"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default Apps;