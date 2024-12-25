// src/api.ts
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Helper function to handle fetch requests
export const fetchApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: T = await response.json();
  return data;
};
