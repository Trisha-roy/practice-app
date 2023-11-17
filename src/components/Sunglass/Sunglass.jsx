import './Sunglass.css'

const Sunglass = ({sun,handleClick}) => {
    const{name,price,image_url}=sun
    return (
        <div className='sunglass'>
           
            <h4>Name: {name}</h4>
            <img src={image_url}></img>
            <p>Price: {price}</p>
            <button onClick={handleClick}>Purchase</button>
        </div>
    );
};

export default Sunglass;