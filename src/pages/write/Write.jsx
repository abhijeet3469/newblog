import "./Write.css";

export default function Write() {
  return <div className="write">
  <img className="writeImage" src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
    <form className="writeForm">
    <div className="writeFormGroup">
    <label htmlFor="fileInput">
        <i className="writeIcon fas fa-plus"></i>
    </label> 
    <input type="file" id="fileInput" style={{display:"none"}}/>
    <input className="writeInput" type="text" placeholder="Ttile" autoFocus={true}/>
    </div>
    <div className="writeFormGroup">
    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
    </div>
    <button className="writeSubmit">Publish</button>
    </form>
  </div>;
}
