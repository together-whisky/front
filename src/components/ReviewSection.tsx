import React, { useState } from 'react';
import { Review } from '../types/whisky';

interface ReviewSectionProps {
    reviews: Review[];
    whiskyName: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, whiskyName }) => {
    const [showAddReview, setShowAddReview] = useState(false);
    const [newReview, setNewReview] = useState({
        userName: '',
        rating: 5,
        comment: ''
    });

    const renderStars = (rating: number, interactive = false, onClick?: (rating: number) => void) => {
        return (
            <div className={`stars ${interactive ? 'interactive' : ''}`}>
                {[1, 2, 3, 4, 5].map(star => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? 'filled' : ''}`}
                        onClick={interactive ? () => onClick?.(star) : undefined}
                    >
                        ⭐
                    </span>
                ))}
            </div>
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        // 실제 앱에서는 여기서 API 호출을 통해 리뷰를 저장합니다.
        console.log('새 리뷰:', {
            ...newReview,
            whiskyName,
            date: new Date().toISOString()
        });

        alert('리뷰가 등록되었습니다! (데모용)');
        setNewReview({ userName: '', rating: 5, comment: '' });
        setShowAddReview(false);
    };

    const averageRating = reviews.length > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        : 0;

    return (
        <section className="review-section">
            <div className="review-header">
                <h2>📝 사용자 리뷰</h2>
                <button
                    onClick={() => setShowAddReview(!showAddReview)}
                    className="add-review-btn"
                >
                    {showAddReview ? '취소' : '리뷰 작성'}
                </button>
            </div>

            {reviews.length > 0 && (
                <div className="review-summary">
                    <div className="average-rating">
                        <span className="rating-number">{averageRating.toFixed(1)}</span>
                        {renderStars(Math.round(averageRating))}
                        <span className="review-count">({reviews.length}개 리뷰)</span>
                    </div>
                </div>
            )}

            {showAddReview && (
                <form className="add-review-form" onSubmit={handleSubmitReview}>
                    <h3>새 리뷰 작성</h3>
                    <div className="form-group">
                        <label htmlFor="userName">이름</label>
                        <input
                            type="text"
                            id="userName"
                            value={newReview.userName}
                            onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                            required
                            placeholder="닉네임을 입력하세요"
                        />
                    </div>
                    <div className="form-group">
                        <label>평점</label>
                        {renderStars(newReview.rating, true, (rating) =>
                            setNewReview(prev => ({ ...prev, rating }))
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">리뷰 내용</label>
                        <textarea
                            id="comment"
                            value={newReview.comment}
                            onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                            required
                            placeholder="위스키에 대한 솔직한 후기를 남겨주세요"
                            rows={4}
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            리뷰 등록
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowAddReview(false)}
                            className="cancel-btn"
                        >
                            취소
                        </button>
                    </div>
                </form>
            )}

            <div className="reviews-list">
                {reviews.length === 0 ? (
                    <p className="no-reviews">
                        아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해보세요!
                    </p>
                ) : (
                    reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header-card">
                                <div className="reviewer-info">
                                    <span className="reviewer-name">{review.userName}</span>
                                    <span className="review-date">{formatDate(review.date)}</span>
                                </div>
                                {renderStars(review.rating)}
                            </div>
                            <p className="review-comment">{review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ReviewSection;