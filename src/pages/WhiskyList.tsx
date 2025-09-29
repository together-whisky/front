import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchQueryState } from '../atom';
import { whiskies } from '../data/whiskies';
import { Whisky } from '../types/whisky';
import SearchBar from '../components/SearchBar';
import WhiskyCard from '../components/WhiskyCard';

const WhiskyList: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

    const filteredWhiskies = useMemo(() => {
        if (!searchQuery) return whiskies;

        return whiskies.filter(whisky =>
            whisky.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            whisky.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            whisky.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
            whisky.origin.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const handleWhiskyClick = (whisky: Whisky) => {
        navigate(`/whisky/${whisky.id}`);
    };

    return (
        <div className="whisky-list">
            <header className="app-header">
                <h1>🥃 Whisky Collection</h1>
                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="위스키 이름, 브랜드, 종류로 검색..."
                />
            </header>

            <main className="whisky-grid">
                {filteredWhiskies.map(whisky => (
                    <WhiskyCard
                        key={whisky.id}
                        whisky={whisky}
                        onClick={() => handleWhiskyClick(whisky)}
                    />
                ))}
                {filteredWhiskies.length === 0 && (
                    <div className="no-results">
                        <p>검색 결과가 없습니다.</p>
                        <button onClick={() => setSearchQuery('')}>
                            전체 보기
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default WhiskyList;