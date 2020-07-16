import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="smcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="smcheck"
    />
    <label htmlFor="smcheck" />
  </span>
);

export default Toggle;