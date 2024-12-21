import React from 'react';
import { SmartToy, Camera, DeviceThermostat } from '@mui/icons-material';

const ConnectedDevices = () => {
  return (
    <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '10px', padding: '20px' ,backgroundColor: 'white'}}>
      <h3>Devices Connected</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <SmartToy />
        <span>Smart Speaker</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Camera />
        <span>Camera</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DeviceThermostat />
        <span>Diffuser</span>
      </div>
    </div>
  );
};

export default ConnectedDevices;
