import React from 'react'

function Cart({id,title,img,type,year}) {
  return (
    <div id={id} className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={img} />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>{year} <span className='right'>{type}</span></p>
    </div>
  </div>
  )
}

export default Cart