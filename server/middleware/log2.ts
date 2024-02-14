export default defineEventHandler(async (event) => {
  event.context.auth = ''
  console.log('log2');
})
