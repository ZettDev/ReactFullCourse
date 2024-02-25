
function ProfilePicture() {
    const imageUrl = './src/assets/profile.jpg';

    let change = true;

    const handleClick = (e) => {
        if(change){
            e.target.src = './src/assets/react.svg';
            change = false;
        }
        else{
            e.target.src = './src/assets/profile.jpg';
            change = true;
        }
        //e.target.style.display = 'none'; // This will hide the image
    }

    return (
        <img onClick={(e) => handleClick(e)} className="profile" src={imageUrl} alt="Profile" />
    );
}
export default ProfilePicture;