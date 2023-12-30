import React, { useState } from 'react';
import './Article.css';
import data from '../data';

const ArticleFavorite = () => {
  const [hoveredId, setHoveredId] = useState(null);

  function getTagColor(tag) {
    const [category] = tag.split(':');
    switch (category) {
      case 'NEW':
        return 'new-tag';
      case 'weapons':
        return 'weapons-tag';
      case 'rarity':
        return 'rarity-tag';
      default:
        return '';
    }
  }

  const handleArticleClick = (id) => {
    const articleUrl = `/clanek${id}`; 
    window.location.href = articleUrl;
  };

  return (
    <div className="all-articles">
      {data.map((oneArticle) => {
        const { id, name, description, image, tags, createdDate } = oneArticle;

        return (
          <div
            key={id}
            className={`one-article ${hoveredId === id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleArticleClick(id)} 
          >
            <img src={image} alt="Something went wrong" />
            <div className="tags">
              {tags.includes('NEW') && (
                <span className={`tag ${getTagColor('NEW')}`}>NEW</span>
              )}
              {tags.map((tag, index) => {
                if (tag === 'NEW') return null;
                return (
                  <span key={index} className={`tag ${getTagColor(tag)}`}>
                    {tag.split(':')[1]}
                  </span>
                );
              })}
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <p className="created-date">{createdDate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleFavorite;
