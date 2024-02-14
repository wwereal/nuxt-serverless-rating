export default defineEventHandler(async (event) => {
  return new Promise((r) => {
    setTimeout(() => {
      r('hello server')
    }, 3000)
  })
  // return 'hello'
})
