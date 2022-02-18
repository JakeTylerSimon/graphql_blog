import React, {useState, useEffect, useRef} from 'react'

const CommentsForm = ({slug}) => {
  
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commonEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const commentEl = useRef();
  const storeDataEl = useRef();
  
    const handleCommentSubmission = () => {
        setError(false);

        const {value: comment} = commonEl.current 
        const {value: name} = nameEl.current 
        const {value: email} = emailEl.current 
        const {checked: storeData} = storeDataEl.current 

        if(!commentEl || !nameEl || !emailEl) {
            setError(true);
            return;
        }

        const commentObj = {name, comment, email, slug}

        if (storeData) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        } else{
            localStorage.removeItem('name', name);
            localStorage.removeItem('email', email);

        }
    }

    return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments Form</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea 
                className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
                ref={commonEl}
                placeholder='Comment'
                name='comment'

            />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input 
                type="text" 
                ref={nameEl}
                className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
                placeholder='name'
                name='name'
            
            />
            <input 
                type="text" 
                ref={emailEl}
                className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
                placeholder='email'
                name='email'
            
            />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="">
                <input type="checkbox" ref={storeDataEl} d='storageDate' name='storeData' value={true} />
                <label className="text-gray-500 cursor-pointer ml-2" htmlFor='storeData'>
                    Save my email and name for next time I comment
                </label>
            </div>
        </div>
       {error && <p className='text-xs text-red-500'>All fields are required</p>}
       <div className="mt-8">
            <button 
                type='button' 
                onClick={handleCommentSubmission} 
                className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                >
                Post Comment
            </button>
            {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for revie</span>}
       </div>
    </div>
  )
}

export default CommentsForm