import React, {useState} from 'react';
import { Data } from '../interfaces/items.interface';
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin2Line} from 'react-icons/ri'
import axios from 'axios'
import EditModal from './Editmodal';

const url:string = 'http://localhost:4000/items'
const Items = ({id, name, description, quantity, price}:Data):JSX.Element => {
const [isEdit, setIsEdit] = useState<boolean>(false)
const myProps:Data = {id,name, description, quantity, price}

const handleEdit = ()=>{
    setIsEdit(!isEdit)
}

const handleDelete = async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    await axios.delete(`${url}/${id}`)
    handleEdit()
}

  return <div className="card">
      {isEdit?<EditModal {...myProps} handleEdit={handleEdit}/>:<><h3>{name}</h3><h4>Qty: <span style={{ fontWeight: 400 }}>{quantity}</span></h4><h4>Descr: <span style={{ fontWeight: 400 }}>{description}</span></h4><h4>Price: <span style={{ fontWeight: 400 }}>{price}$</span></h4><div className="buttons">
          <button className="edit" onClick={handleEdit}>
              <FiEdit />
          </button>
          <button className="delete" onClick={handleDelete}>
              <RiDeleteBin2Line />
          </button>
      </div></>}
  </div> };


export default Items;
