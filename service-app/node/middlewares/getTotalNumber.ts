

export async function getTotalNumber(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { externalMasterdata },
  } = ctx

  ctx.body = await externalMasterdata.getTotalNumber("_where=email is not null")
  ctx.set({
    'Cache-Control': 'no-cache'
  })

  await next()
}
