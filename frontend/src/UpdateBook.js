import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'


function UpdateBook() {

    const { id } = useParams();
    const navigate = useNavigate();
  

    useEffect(() => {
        axios
          .get(`http://localhost:8082/select/${id}`)
          .then((res) => {
              setValues({...values,
                isbn:res.data[0].isbn,
                title:res.data[0].title,
                description:res.data[0].description,
                cover:res.data[0].cover,
                author:res.data[0].author,
                category:res.data[0].category,
                edition:res.data[0].edition,
                language:res.data[0].language,
                publisher:res.data[0].publisher,
                publication_date:res.data[0].publication_date,
                price:res.data[0].price,
                book_cover:res.data[0].book_cover})
           
          })
          .catch(err => console.log(err))
           
         
      }, []);
    

    const [values,setValues]=useState({
        isbn:'',
        title:'',
        description:'',
        cover:'',
        author:'',
        category:'',
        edition:'',
        language:'',
        publisher:'',
        publication_date:'',
        price:'',
        book_cover:''


    })

    const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:8082/update/'+id,values)
        .then(res=>
        {
            console.log(res)
            navigate('/')
        }
        ).catch(err=>console.log(err));
    }

  return (
    <div className="w-screen bg-gray-200  h-screen overflow-hidden flex justify-center items-center">
       <div className='bg-white border border-gray-200 rounded-xl  h-fit shadow-md w-full mx-[600px] px-[45px] '>
        
        <form onSubmit={handleUpdate}>
            <div className='text-blue-950 text-center text-2xl font-bold mb-4 mt-4'>Update book details</div>

         
            <div className='mb-2 flex justify-between'>
                <div className='text-md text-gray-600 font-semibold'><label htmlFor="" >ISBN</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter ISBN number' value={values.isbn}
                onChange={e=>setValues({...values,isbn:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Title</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter Title' value={values.title}
                onChange={e=>setValues({...values,title:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Description</label></div>
                <div className='w-96'>
                <textarea type="text"  placeholder='Enter Description' value={values.description}
                onChange={e=>setValues({...values,description:e.target.value})} className='h-24 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></textarea></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Cover</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter cover type' value={values.cover}
                onChange={e=>setValues({...values,cover:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Author</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter author name' value={values.author}
                onChange={e=>setValues({...values,author:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Category</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter category' value={values.category}
                onChange={e=>setValues({...values,category:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Edition</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter edition' value={values.edition}
                onChange={e=>setValues({...values,edition:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Language</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter language' value={values.language}
                onChange={e=>setValues({...values,language:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Publisher</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter publisher name' value={values.publisher}
                onChange={e=>setValues({...values,publisher:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Publication Date</label></div>
                <div className='w-96'>
                <input type="date"  placeholder='Enter publication date' value={values.publication_date}
                onChange={e=>setValues({...values,publication_date:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            
            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Price</label></div>
                <div className='w-96'>
                <input type="text"  placeholder='Enter price' value={values.price}
                onChange={e=>setValues({...values,price:e.target.value})} className=' w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400' ></input></div>
            </div>

            <div className='mb-2 flex justify-between'>
            <div className='text-md text-gray-600 font-semibold'><label htmlFor="">Book Cover</label></div>
                <div className='w-96'>
                <input
  type="file"
  onChange={(e) =>
    setValues({ ...values, book_cover: e.target.files[0] }) // Store the file object
  }
  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
/>
</div>
            </div>

            <div className='flex justify-between mt-8 mb-4'>
            <button className='w-32 bg-green-800 p-1 rounded-md hover:bg-slate-600'><div className=' '><Link to='/' className="text-decoration-none  font-semibold text-white text-md">Back</Link></div></button>
                <button className='w-32 bg-blue-950 p-1 rounded-md hover:bg-slate-600'><div className='text-white font-bold text-md'>Update</div></button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default UpdateBook

