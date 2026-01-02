import React from 'react';
import './Card.css';

interface CardProps {
    content?: string;
    imageUrl?: string;
    width?: number;
    height?: number;
}

export const Card: React.FC<CardProps> = ({
    content,
    imageUrl,
    width = 300,
    height = 200,
}) => {
    
    return (
        <div className="card" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="card-content">
                {imageUrl ? (
                    <img src={imageUrl} alt="card" className="card-image" />
                ) : (
                    <p className="card-text">{content}</p>
                )}
            </div>
        </div>
    )
}