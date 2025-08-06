import { create } from 'zustand'

import { data_cart } from '../data/data'

const finalFormattedDateTime =
    new Date().toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }) +
    ' ' +
    new Date().toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    })

console.log(finalFormattedDateTime) // Output: 06.08.2025 17:37 (or similar)

export const useArticlesStore = create(set => ({
    // Load articles from assets file
    articles: data_cart || [],

    // articles of years -- boolean

    // Добавить новую статью
    addArticle: newArticle => {
        set(state => ({
            articles: [
                ...state.articles,
                {
                    ...newArticle,
                    id: Date.now(),
                    date: finalFormattedDateTime,
                },
            ],
        }))
    },

    // методы добавления новых элементов в массив посмотреть

    // Удалить статью
    deleteArticle: id => {
        set(state => ({
            articles: state.articles.filter(article => article.id !== id),
        }))
    },
}))
