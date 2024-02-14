export default defineEventHandler(async (event) => {
  const param1 = getRouterParam(event, 'param1')
  return `Hello Nitro, ${param1}`
})