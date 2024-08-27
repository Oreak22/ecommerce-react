import React, { createContext, useContext, useState } from 'react'

export const LoadingContent = createContext()
export const LoadingState = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
  return (
    <LoadingContent.Provider value={{isLoading, setIsLoading}}>
        {children}
    </LoadingContent.Provider>
  )
}

//  LoadingState