import './Settings.css'
import SideBar from '../../components/sidebar/SideBar'
export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
        <div className='settingTitle'>
        <span className='settingsUpdateTitle'>Update Your Account</span>
        <span className='settingsDeleteTitle'>Delete  Account</span> 
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
                <img src='https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                <label htmlFor='fileInput'>
                    <i className='settingsPPIcon far fa-user-circle'></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <lable>User Name</lable>
            <input type="text" placeholder='Abhijeet'/>
            <lable>E-Mail</lable>
            <input type="email" placeholder='abhijeeet3469@gmail.com'/>
            <lable>Password</lable>
            <input type="password"/>
            <button className='settingsSubmit'>Update</button>
        </form>
    </div>
    <SideBar/>
    </div>
  )
}
