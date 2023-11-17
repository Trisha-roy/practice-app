import './Watch.css'

const Watch = ({watch}) => {
    const {name,price}=watch
    return (
        <div className='watch'>
            <h4>Watch Name: {name} </h4>
            <p>Price: {price} </p>
        </div>
    );
};

export default Watch;