import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { whiskies, pairingFoods, reviews } from '../data/whiskies';
import PairingSection from '../components/PairingSection';
import ReviewSection from '../components/ReviewSection';

const WhiskyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const whisky = useMemo(() => {
        return whiskies.find(w => w.id === Number(id));
    }, [id]);

    const whiskyReviews = useMemo(() => {
        return reviews.filter(r => r.whiskyId === Number(id));
    }, [id]);

    const pairedFoods = useMemo(() => {
        return pairingFoods.filter(food =>
            food.pairedWhiskyIds.includes(Number(id))
        );
    }, [id]);

    if (!whisky) {
        return (
            <div className="not-found">
                <h2>위스키를 찾을 수 없습니다</h2>
                <button onClick={() => navigate('/')}>
                    홈으로 돌아가기
                </button>
            </div>
        );
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(price);
    };

    const averageRating = whiskyReviews.length > 0
        ? whiskyReviews.reduce((sum, review) => sum + review.rating, 0) / whiskyReviews.length
        : 0;

    return (
        <div className="whisky-detail">
            <header className="detail-header">
                <button
                    onClick={() => navigate('/')}
                    className="back-button"
                >
                    ← 목록으로
                </button>
            </header>

            <main className="detail-content">
                <div className="whisky-hero">
                    <div className="whisky-image-large">
                        <img
                            src={whisky.imageUrl}
                            alt={whisky.name}
                            onError={(e) => {
                                e.currentTarget.src = '/images/default-whisky.jpg';
                            }}
                        />
                    </div>
                    <div className="whisky-info-detailed">
                        <h1 className="whisky-title">{whisky.name}</h1>
                        <p className="whisky-brand-large">{whisky.brand}</p>

                        <div className="whisky-specs">
                            <div className="spec-item">
                                <label>종류</label>
                                <span>{whisky.type}</span>
                            </div>
                            {whisky.age && (
                                <div className="spec-item">
                                    <label>숙성기간</label>
                                    <span>{whisky.age}년</span>
                                </div>
                            )}
                            <div className="spec-item">
                                <label>도수</label>
                                <span>{whisky.abv}%</span>
                            </div>
                            <div className="spec-item">
                                <label>원산지</label>
                                <span>{whisky.origin}</span>
                            </div>
                            <div className="spec-item">
                                <label>가격</label>
                                <span className="price">{formatPrice(whisky.price)}</span>
                            </div>
                            {whiskyReviews.length > 0 && (
                                <div className="spec-item">
                                    <label>평점</label>
                                    <span className="rating">
                                        ⭐ {averageRating.toFixed(1)} ({whiskyReviews.length}개 리뷰)
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <section className="whisky-description">
                    <h2>설명</h2>
                    <p>{whisky.description}</p>
                </section>

                <section className="tasting-notes">
                    <h2>테이스팅 노트</h2>
                    <div className="notes-grid">
                        <div className="note-item">
                            <h3>👃 Nose (향)</h3>
                            <p>{whisky.tastingNotes.nose}</p>
                        </div>
                        <div className="note-item">
                            <h3>👅 Palate (맛)</h3>
                            <p>{whisky.tastingNotes.palate}</p>
                        </div>
                        <div className="note-item">
                            <h3>🏁 Finish (여운)</h3>
                            <p>{whisky.tastingNotes.finish}</p>
                        </div>
                    </div>
                </section>

                <PairingSection foods={pairedFoods} />
                <ReviewSection reviews={whiskyReviews} whiskyName={whisky.name} />
            </main>
        </div>
    );
};

export default WhiskyDetail;