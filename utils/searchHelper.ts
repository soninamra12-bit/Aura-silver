import { Product } from '../types';

// Calculate Levenshtein distance between two strings
const getLevenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

export const fuzzySearch = (query: string, products: Product[]): Product[] => {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase().trim();
  
  // Threshold for fuzzy match: allow 1 mistake per 4 characters roughly
  const getThreshold = (str: string) => Math.floor(str.length / 4) + 1;

  return products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();
    
    // 1. Direct includes match (High Priority)
    if (name.includes(normalizedQuery) || category.includes(normalizedQuery)) {
      return true;
    }

    // 2. Fuzzy match on name words
    const nameWords = name.split(' ');
    const queryWords = normalizedQuery.split(' ');

    // Check if any word in the query roughly matches any word in the product name
    return queryWords.some(qWord => {
      if (qWord.length < 3) return false; // Skip very short words for fuzzy
      return nameWords.some(nWord => {
        const dist = getLevenshteinDistance(qWord, nWord);
        return dist <= getThreshold(qWord); // Dynamic threshold based on word length
      });
    }) || queryWords.some(qWord => {
       // Fuzzy match on Category
       if (qWord.length < 3) return false;
       const dist = getLevenshteinDistance(qWord, category);
       return dist <= getThreshold(qWord);
    });
  });
};