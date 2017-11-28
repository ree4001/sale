import React from 'react'

const checkIsArray = (source) => {
  if (Array.isArray(source)) {
    return source
  }
  return []
} 

export default checkIsArray