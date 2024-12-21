import React from 'react';
import RoomVisualization from './RoomVisualization';
import TemperatureControl from './TemperatureControl';
import BillSummary from './BillSummary';
import ConnectedDevices from './ConnectedDevices';
import Model from './Model'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' ,backgroundColor:'white', border: '1px solid #ddd', borderRadius: '10px'}}>Smart Home Dashboard</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        
      <div style={{ flex: 1 }}>
        
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <RoomVisualization />
            <BillSummary />
            <ConnectedDevices />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <TemperatureControl room="Saif's Room" temperature={25} />
        <Model modelPath='/modern_house_gltf/scene.gltf'/>
      </div>
    </div>
  );
};

export default Dashboard;
