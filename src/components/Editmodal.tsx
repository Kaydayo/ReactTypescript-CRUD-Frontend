import React , {useState} from 'react';
import { NewData, HandleEdit } from '../interfaces/items.interface';
import { GrDocumentUpdate } from 'react-icons/gr';
import axios from 'axios'


const url:string = 'http://localhost:4000/items'
const EditModal = ({id, name, description, quantity, price, handleEdit}:HandleEdit ):JSX.Element => {
    const [updateData, setUpdateData] = useState<NewData>({name,description,quantity,price})

    const handleUpdate = async(e:React.MouseEvent<HTMLButtonElement>):Promise<void> =>{
        e.preventDefault()
        await axios.put(`${url}/${id}`, {...updateData})
        handleEdit()
    }

    const handleChanges = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const name: string = e.currentTarget.name
        const value:string|number = e.currentTarget.value
        const addData = {...updateData, [name]:value}
        setUpdateData(addData)
    }

  return <div>
  <input type="text" name="name" value={updateData.name} onChange={handleChanges}/>
  <input type="text" name="quantity" value={updateData.quantity} onChange={handleChanges}/>
  <input type="text" name="description" value={updateData.description} onChange={handleChanges}/>
  <input type="text" name="price" value={updateData.price} onChange={handleChanges}/>
  <div className="buttons">
      <button className="update" onClick={handleUpdate}>
      <GrDocumentUpdate/>
      </button>
  </div>
</div> ;
};

export default EditModal;
