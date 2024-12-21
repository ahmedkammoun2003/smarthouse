import React from 'react';

const BillSummary = () => {
  const billDetails = [
    { item: 'Electricity', amount: 50.00 },
    { item: 'Water', amount: 30.00 },
    { item: 'Gas', amount: 20.00 },
    { item: 'Internet', amount: 40.00 },
    { item: 'Total', amount: 140.00 },
  ];

  return (
    <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: '10px', padding: '20px' ,backgroundColor:'white'}}>
      <h3>Bill Summary</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Item</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {billDetails.map((detail, index) => (
            <tr key={index}>
              <td style={{ padding: '8px' }}>{detail.item}</td>
              <td style={{ padding: '8px', textAlign: 'right' }}>{detail.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillSummary;
