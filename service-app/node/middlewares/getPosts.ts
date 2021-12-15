export async function getPosts(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { posts },
  } = ctx

  ctx.body = await posts.getPosts()
  ctx.set({
    'Cache-Control': 'no-cache'
  })

  await next()
}
