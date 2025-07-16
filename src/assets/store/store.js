import { create } from 'zustand';

// Define the store
const useArticlesStore = create((set, get) => ({
  // State
  articles: [],
  loading: false,
  error: null,

  // Actions
  setArticles: (articles) => set({ articles }),
  
  setLoading: (loading) => set({ loading }),
  
  setError: (error) => set({ error }),

  // Add a new article
  addArticle: (article) => {
    const newArticle = {
      ...article,
      id: Date.now(), // Generate unique ID
      date: new Date().toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    set((state) => ({
      articles: [...state.articles, newArticle]
    }));
  },

  // Edit an existing article
  editArticle: (id, updatedData) => {
    set((state) => ({
      articles: state.articles.map(article =>
        article.id === id 
          ? { ...article, ...updatedData }
          : article
      )
    }));
  },

  // Delete an article
  deleteArticle: (id) => {
    set((state) => ({
      articles: state.articles.filter(article => article.id !== id)
    }));
  },

  // Get article by ID
  getArticleById: (id) => {
    return get().articles.find(article => article.id === id);
  },

  // Load initial data from assets
  loadInitialData: async () => {
    try {
      set({ loading: true, error: null });
      
      // Import your data from assets folder
      // Adjust the path according to your project structure
      const { default: articlesData } = await import('../../assets/data/data.js');
      
      set({ 
        articles: articlesData,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error.message,
        loading: false 
      });
    }
  },


}));

export default useArticlesStore;