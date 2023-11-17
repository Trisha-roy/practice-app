import './Sunglass.css'

const Sunglass = ({sun}) => {
    const{name,price,image_url}=sun
    return (
        <div className='sunglass'>
           
            <h4>Name: {name}</h4>
            <img src={image_url}></img>
            <p>Price: {price}</p>
        </div>
    );
};

export default Sunglass;