import React, { useState } from 'react'
import { AsyncPaginate, withAsyncPaginate } from 'react-select-async-paginate'

const Researcher = ({ onSearchChange }: {onSearchChange: (data: any) => void }) => {

  // return ('Researcher!')

  const [search, setSearch] = useState( null )

  const handleOnChange = ( data: any ) => {
    setSearch(data)
    onSearchChange(data)
  }

  return (
    <AsyncPaginate
      placeholder='City...'
      debounceTimeout={ 600 }
      value={ search }
      onChange={ handleOnChange }
    />
  )
}

export default Researcher
