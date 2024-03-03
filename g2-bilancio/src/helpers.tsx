// local storage

export const fetchDateFromLocalStorage = ( key: string ): { [key:string|number]: any } => {

  const data = localStorage.getItem( key )
  return data ? JSON.parse( data ) : {}
}