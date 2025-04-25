import React from 'react';

const LabelItem: React.FC<{ name: string }> = ({ name }) => (
    <span className="nav-label">{name}</span>
);

export default LabelItem;
