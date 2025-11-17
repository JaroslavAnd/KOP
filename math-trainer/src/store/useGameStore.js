import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create(
  persist(
    (set) => ({
     
      settings: {
        difficulty: 'medium',
        gameTime: 30,
      },
      results: [],
      currentUser: 'Guest', 

      setSettings: (newSettings) => set({ settings: newSettings }),
      setCurrentUser: (name) => set({ currentUser: name }), 

      addResult: (newResult) => set((state) => ({
        results: [...state.results, newResult],
      })),

      clearResults: () => set({ results: [] }),
    }),
    {
      name: 'math-trainer-storage',
    }
  )
);