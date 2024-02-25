//import imageName from 'path'
import reactImage from '../assets/react.svg'
function Card() {
    //<img src={imageName} alt={'Card image'}></img>
    //<img src="https://via.placeholder.com/150" alt={'Card image'}></img>
    return (
        <div className="card">
            <img className="card-image" src={reactImage} alt='Card image'></img>
            <h2 className="card-title">Card Title</h2>
            <p className='card-text'>Card Description</p>
        </div>
    );
}

export default Card