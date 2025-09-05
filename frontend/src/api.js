const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function healthCheck() {
  const res = await fetch(`${API_BASE_URL}/health`)
  return res.json()
}// Extend with more API calls as needed