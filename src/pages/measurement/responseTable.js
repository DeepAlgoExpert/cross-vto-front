import React from 'react';
import './styles.css'; // Import the CSS file

const ResponseTable = ({ responseData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Measurement</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(responseData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{typeof value === 'number' ? value.toFixed(2) : value}Cm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTable;