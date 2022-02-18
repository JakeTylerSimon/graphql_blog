import React, {useState, useEffect} from 'react'
import momen from 'moment'
import parse from 'html-react-parser'

const Comments = ({ slug }) => {
  
  const [comments, etComments] = useState([]);

  useEffect(() => {
    getComments(slug)
  }, [])
  
  return (
    <div>Comments</div>
  )
}

export default Comments