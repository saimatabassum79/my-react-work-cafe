
import profile from '../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 w-8/12 mx-auto'>
               <h1 className='text-4xl font-bold'> Knowledge cafe project</h1>
               <img src={profile} alt="" />
        </div>
    );
};

export default Header;