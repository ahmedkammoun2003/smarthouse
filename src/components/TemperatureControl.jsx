import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const TemperatureControl = ({ room, temperature }) => {
  return (
    <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '10px', padding: '20px' ,backgroundColor:'white',height:'200px'}}>
      <Typography variant="h6">{room} Temperature</Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress
          variant="determinate"
          value={(temperature / 40) * 100}
          size={75}
          thickness={5}
        />
        <Typography variant="h4" style={{ marginTop: '10px' }}>
          {temperature}°C
        </Typography>
      </div>
    </div>
  );
};

export default TemperatureControl;
