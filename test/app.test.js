const request = require('supertest')
const app = require('../app')

test('health check returns ok', async () => {
  const response = await request(app).get('/health')
  expect(response.text).toBe('ok')
})

test('returns Hello World', async () => {
  const response = await request(app).get('/')
  expect(response.text).toBe('Hello World!')
})
