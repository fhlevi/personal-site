import React from 'react';

const ImageItem: React.FC<{ image: string }> = ({ image }) => (
    <img 
        src={image} 
        alt="avatar" 
        className="avatar" 
    />
);

export default ImageItem;
