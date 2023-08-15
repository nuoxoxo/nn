export const FetchData = async ( path: string ): Promise<string[]> => {

  try {
    const resp = await fetch( path )
    const text = await resp.text()
    const raws: string[] = text.trim().split('\n')
    return raws
  } catch (error: any) {
    console.error("Error fetching data: ", error)
    throw error
  }
}

export const LenNStrsFromLine = (s: string, n: number): string[] => {
  let res: string[] = []
  let i: number = 0
  while (i < s.length) {
    let len: number = (s.length - i + 1) < n ? s.length - i + 1 : n
    res.push(s.substring(i, i + len))
    i += n
    // console.log(i, res[res.length - 1])
  }
  return res
}
