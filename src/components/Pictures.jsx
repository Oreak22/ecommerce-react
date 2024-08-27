import React, { Suspense } from 'react'
import LoaderSmall from './LoaderSmall'
import jack from '../asset/img/AppStore.png'

const Pictures = ({url}) => {
    const pic = React.lazy(()=>import ('../asset/img/AppStore.png'))
  return (
    // <Suspense fallback={<LoaderSmall/>}>
        <img src={url} alt={pic[1]} className='py-md-2 px-4 px-md-0 pb-md-4 wishpic img-fluid' />
    // </Suspense>
  )
}

export default Pictures