import React, { Suspense } from 'react'

function LoadingPulse({styles}){
    return(
        <div className={`w-full min-h-[100px] bg-gray-200 animate-pulse ${styles}`}>
        </div>
    )
}
function HandleLoadingElement({children, styles}) {
  return (
    <>
        <Suspense fallback={<LoadingPulse styles={styles}/>}>
            {children}
        </Suspense>
    </>
    
  )
}

export default HandleLoadingElement