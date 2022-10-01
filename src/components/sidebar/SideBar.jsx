import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>About Me</span>
        <img src='https://i.pinimg.com/736x/53/98/64/53986438bff22d7678777cc823a91243.jpg' alt=''/>
        <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sideBarItem'>
      <span className='sideBarTitle'>Categories</span>
      <ul className='sideBarList'>
        <li className='sideBarListItem'>Life</li>
        <li className='sideBarListItem'>Music</li>
        <li className='sideBarListItem'>Style</li>
        <li className='sideBarListItem'>Sports</li>
        <li className='sideBarListItem'>Tec</li>
        <li className='sideBarListItem'>Cinema</li>
      </ul>
      </div>
      <div className='sideBarItem'>
      <span className='sideBarTitle'>Follow Us</span>
      <div className='sideBarSocial'>
      <i class="sideBarIcon fa-brands fa-square-facebook"></i>
        <i class="sideBarIcon fa-brands fa-square-twitter"></i>
        <i class="sideBarIcon fa-brands fa-square-pinterest"></i>
        <i class="sideBarIcon fa-brands fa-square-instagram"></i>
      </div>
      </div>
    </div>
  )
}
