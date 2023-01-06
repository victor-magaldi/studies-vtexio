

export async function getSellersById(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { search },
  } = ctx

  const req = await search.sellers()
  ctx.body = req.data

  ctx.set({
    'Cache-Control': 'no-cache'
  })

  await next()
}
