import React from 'react';
import { PairingFood } from '../types/whisky';

interface PairingSectionProps {
    foods: PairingFood[];
}

const PairingSection: React.FC<PairingSectionProps> = ({ foods }) => {
    if (foods.length === 0) {
        return (
            <section className="pairing-section">
                <h2>🍽️ 페어링 추천</h2>
                <p className="no-pairings">추천 페어링 음식이 없습니다.</p>
            </section>
        );
    }

    return (
        <section className="pairing-section">
            <h2>🍽️ 페어링 추천</h2>
            <p className="pairing-intro">
                이 위스키와 완벽한 조화를 이루는 음식들을 추천드립니다.
            </p>
            <div className="pairing-grid">
                {foods.map(food => (
                    <div key={food.id} className="pairing-card">
                        <div className="pairing-image">
                            <img
                                src={food.imageUrl}
                                alt={food.name}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/default-food.jpg';
                                }}
                            />
                        </div>
                        <div className="pairing-info">
                            <h3>{food.name}</h3>
                            <span className="food-category">{food.category}</span>
                            <p>{food.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PairingSection;