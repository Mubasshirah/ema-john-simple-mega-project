import React from 'react';
import './OrderedDetai.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const OrderedDetail = ({product,handleDelete}) => {
    const {img,id,category,name,price,quantity}=product;
    return (
        <div className='details'>
        <div><img src={img} alt="" /></div>
        <div className='prod-detail'>
            <p>{name}</p>
            <p>Quantity:{quantity}</p>
            <p>price:{price}</p>
        </div>
        <div>
            <button onClick={()=>handleDelete(id)} className='dlt-btn'><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        </div>
    );
};

export default OrderedDetail;