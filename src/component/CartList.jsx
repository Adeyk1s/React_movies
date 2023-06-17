import Cart from './Cart';

function CartList({movie}) {
    
  return ( 
    <div className='movies'>
    {
        movie ? movie.map((obj) => (
            <Cart
            key={obj.imdbID}
            title={obj.Title}
            img={obj.Poster}
            year={obj.Year}
            type={obj.Type}
            id={obj.imdbID} 
            />
          )) 
          :
          "Ничего не найдено..."
    }
    </div>
  )
}

export default CartList