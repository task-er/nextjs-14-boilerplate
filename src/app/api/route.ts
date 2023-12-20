export const GET = async (request: Request): Promise<Response> => {
  const { searchParams } = new URL(request.url)
  return Response.json({ product: searchParams })
}
