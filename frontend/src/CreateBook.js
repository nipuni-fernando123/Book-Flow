import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'

function CreateBook() {

    const [isbn,setIsbn]=useState('')
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [cover,setCover]=useState('')
    const [author,setAuthor]=useState('')
    const [category,setCategory]=useState('')
    const [edition,setEdition]=useState('')
    const [language,setLanguage]=useState('')
    const [publisher,setPublisher]=useState('')
    const [publication_date,setPublication_date]=useState('')
    // const [publication_date,setPublication_date]=useState(new Date().toISOString().split('T')[0])
    const [price,setPrice]=useState('')
    const [book_cover,setBook_cover]=useState(null)
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setBook_cover(e.target.files[0]);  // Ensure it is a file, not empty
      }
      
    function handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData();
        formData.append("isbn", isbn);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("cover", cover);
        formData.append("author", author);
        formData.append("category", category);
        formData.append("edition", edition);
        formData.append("language", language);
        formData.append("publisher", publisher);
        formData.append("publication_date", publication_date);
        formData.append("price", price);
    
        if (book_cover) {
          formData.append("book_cover", book_cover); // Append the file object (book cover)
        }
    
        // Send the form data (including file) to the backend
        axios
          .post("http://localhost:8082/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res);
            navigate("/"); // Redirect to home page after successful form submission
          })
          .catch((err) => {
            console.log(err);
          });
      }
    

  return (
    <div className="w-screen bg-gray-200  h-screen overflow-hidden flex justify-center items-center">
       <div className='bg-white border border-gray-200 rounded-xl  h-fit shadow-md w-full mx-[600px] px-[45px] '>
        
        <form onSubmit={handleSubmit}>
            <div className='text-blue-950 text-center text-2xl font-bold mb-4 mt-4'>Add New Book</div>

         
            <div className='mb-2 flex justify-between'>
                <div className='text-md text-gray-600 font-semibold'><label htmlFor="" >ISBN</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter ISBN number' 
                onChange={e=>setIsbn(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Title</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter Title' 
                onChange={e=>setTitle(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Description</label></div>
                <div className='w-96'>
                <textarea type="text"  placeholder='Enter Description' 
                onChange={e=>setDescription(e.target.value)} className='h-24 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></textarea></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Cover</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter cover type' 
                onChange={e=>setCover(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Author</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter author name' 
                onChange={e=>setAuthor(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Category</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter category' 
                onChange={e=>setCategory(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Edition</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter edition' 
                onChange={e=>setEdition(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Language</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter language' 
                onChange={e=>setLanguage(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Publisher</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter publisher name' 
                onChange={e=>setPublisher(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Publication Date</label></div>
                <div className='w-96'>
                <input type="date"  placeholder='Enter publication date' 
                onChange={e=>setPublication_date(e.target.value )} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Price</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter price' 
                onChange={e=>setPrice(e.target.value)} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Book Cover</label></div>
                <div className='w-96'>
                <input type="file"  placeholder='Choose file' 
                onChange={handleFileChange} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='flex justify-between mt-8 mb-4'>
            <button className='w-32 bg-green-800 p-1 rounded-md hover:bg-slate-600'><div className=' '><Link to='/' className="text-decoration-none  font-semibold text-white text-md">Back</Link></div></button>
                <button type="submit" className='w-32 bg-blue-950 p-1 rounded-md hover:bg-slate-600'><div className='text-white font-bold text-md'>Add</div></button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default CreateBook
