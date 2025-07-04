
import React from 'react';
import { Tables } from '@/integrations/supabase/types';

type Film = Tables<'films'>;

interface FilmListProps {
  films: Film[];
  activeIndex: number;
  onFilmClick: (index: number) => void;
}

const FilmList = ({ films, activeIndex, onFilmClick }: FilmListProps) => {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="space-y-1">
        {films.map((film, index) => (
          <button
            key={film.id}
            onClick={() => onFilmClick(index)}
            className={`block text-left transition-all duration-300 hover:opacity-100 ${
              index === activeIndex 
                ? 'opacity-100 text-white text-6xl md:text-7xl lg:text-8xl font-bold' 
                : 'opacity-60 text-white/60 text-2xl md:text-3xl hover:text-white/80'
            }`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-serif leading-tight">{film.title}</span>
              <span className="text-lg md:text-xl lg:text-2xl font-light opacity-75">{film.year}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilmList;
