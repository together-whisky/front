import React from 'react';
import { Whisky } from '../types/whisky';

interface WhiskyCardProps {
    whisky: Whisky;
    onClick: () => void;
}

const WhiskyCard: React.FC<WhiskyCardProps> = ({ whisky, onClick }) => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(price);
    };

    return (
        <div className="whisky-card" onClick={onClick}>
            <div className="whisky-image">
                <img
                    src={whisky.imageUrl}
                    alt={whisky.name}
                    onError={(e) => {
                        e.currentTarget.src = '/images/default-whisky.jpg';
                    }}
                />
            </div>
            <div className="whisky-info">
                <h3 className="whisky-name">{whisky.name}</h3>
                <p className="whisky-brand">{whisky.brand}</p>
                <div className="whisky-details">
                    <span className="whisky-type">{whisky.type}</span>
                    {whisky.age && <span className="whisky-age">{whisky.age}년</span>}
                    <span className="whisky-abv">{whisky.abv}%</span>
                </div>
                <div className="whisky-origin">🌍 {whisky.origin}</div>
                <div className="whisky-price">{formatPrice(whisky.price)}</div>
                <p className="whisky-description">
                    {whisky.description.length > 80
                        ? `${whisky.description.substring(0, 80)}...`
                        : whisky.description
                    }
                </p>
            </div>
        </div>
    );
};

export default WhiskyCard;