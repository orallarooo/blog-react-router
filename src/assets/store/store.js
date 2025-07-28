import { create } from 'zustand';
import { data_cart } from '../data/data.js'; // Import your data file

export const useArticlesStore = create((set) => ({
  // Load articles from assets file
  articles: data_cart || [],

 // Добавить новую статью
  addArticle: (newArticle) => {
    set((state) => ({
      articles: [...state.articles, { 
        ...newArticle, 
        id: Date.now(),
        createdAt: new Date().toISOString()
      }]
    }));
  },

  // Удалить статью
  deleteArticle: (id) => {
    set((state) => ({
      articles: state.articles.filter(article => article.id !== id)
    }));
  }

}));