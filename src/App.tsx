import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
import {Data} from './interfaces/items.interface'
import axios from 'axios';
import Modal from './components/Modal';


const url:string = 'http://localhost:4000/items'

function App() {
  const [data, setData] = useState<Data[]>([])
  const[modal, setShowModal] = useState<Boolean>(false)
  

  const fetchUrl = async (url:string):Promise<void>=>{
   try{
     const response = await axios.get<Data[]>(url)
     const newData = response.data
     setData(newData)
   }catch(error){
     console.error(error)
   }
    }


  

  const handleCloseModal = ():void=>{
    setShowModal(false)
  }
  const handleOpenModal=():void=>{
    setShowModal(true)
  }


  useEffect(() => {
    fetchUrl(url)
  }, [data]);
  

  return (
    <>
    <Header handleOpenModal={handleOpenModal}/>
    <div className="card-content">
    {data.length>0?data.map((item:Data)=><Items {...item} key={item.id}/>
    ):<h3 className='loading'>No items to preview...</h3>}
    </div>
    {modal && <Modal handleCloseModal={handleCloseModal}/>}
    </>
  );
}

export default App;
