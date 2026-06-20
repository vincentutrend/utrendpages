const API_BASE_URL = window.API_BASE_URL || 'http://localhost:3000/api'

async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

async function apiPost(endpoint, data) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}
