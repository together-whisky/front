import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
    return (
        <div className="search-bar">
            <div className="search-input-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="search-input"
                />
                {value && (
                    <button
                        onClick={() => onChange('')}
                        className="clear-button"
                        aria-label="검색어 지우기"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;