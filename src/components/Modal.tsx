import React, {useState} from 'react';
import {RiCloseCircleFill} from 'react-icons/ri';
import { Modalprops } from '../interfaces/items.interface';
import { NewData } from '../interfaces/items.interface';
import axios from 'axios'


const url:string = 'http://localhost:4000/items'
const Modal = ({handleCloseModal}:Modalprops):JSX.Element => {
    const [newData, setNewData] = useState<NewData>({name:'',description:'', quantity:0, price:0})
    const handleChanges = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name: string = e.currentTarget.name
        const value:string|number = e.currentTarget.value
        const addData = {...newData, [name]:value}
        setNewData(addData)
    }
    
    const handleCreate = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
       await axios.post(url, {...newData
       })
       handleCloseModal()
    }

    
    

  return <div className="form-modal">
      <div className="modal-content">
          <div className="close-modal">
              <span onClick={handleCloseModal}><RiCloseCircleFill /></span>
          </div>
          <form>
              <div className="form-name">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" onChange={handleChanges}/>
              </div>
              <div className="form-description">
                  <label htmlFor="description">Description:</label>
                  <input type="text" name="description" onChange={handleChanges}/>
              </div>
              <div className="quantity">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" name="quantity" onChange={handleChanges}/>
              </div>
              <div className="price">
                  <label htmlFor="price">Price:</label>
                  <input type="number" name="price" onChange={handleChanges}/>
              </div>
              <div className="create-btn">
              <button className="send-create" onClick={handleCreate}> create </button>
              </div>
          </form>
      </div>
  </div>;
};

export default Modal;
