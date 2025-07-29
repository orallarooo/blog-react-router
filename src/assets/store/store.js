import { create } from 'zustand';

export const useArticlesStore = create((set) => ({
  // Load articles from assets file
  articles:  [],

  // articles of years -- boolean

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

  // методы добавления новых элементов в массив посмотреть

  // Удалить статью
  deleteArticle: (id) => {
    set((state) => ({
      articles: state.articles.filter(article => article.id !== id)
    }));
  }

}));

// push ->
// pop  <-

// shift   <-
// unshift ->