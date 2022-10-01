import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImage"
          src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Abhijeet</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          fufuhafuo;hfoi dhfoiewhfhew hedhvoiewh eoifhewohf e;jfuoeifhewh
          ejfhoewihewlknvl pdjvhi miehfohweoi ihefoiew jbhvhvouh ehiohewoh
          nlehvih livhidh hoidvpd opewfpjewjb jioh opojjh efhew hfhoiewdh
          oihfihebj eifheijhkjb?
          fufuhafuo;hfoi dhfoiewhfhew hedhvoiewh eoifhewohf e;jfuoeifhewh
          ejfhoewihewlknvl pdjvhi miehfohweoi ihefoiew jbhvhvouh ehiohewoh
          nlehvih livhidh hoidvpd opewfpjewjb jioh opojjh efhew hfhoiewdh
          oihfihebj eifheijhkjb?
          fufuhafuo;hfoi dhfoiewhfhew hedhvoiewh eoifhewohf e;jfuoeifhewh
          ejfhoewihewlknvl pdjvhi miehfohweoi ihefoiew jbhvhvouh ehiohewoh
          nlehvih livhidh hoidvpd opewfpjewjb jioh opojjh efhew hfhoiewdh
          oihfihebj eifheijhkjb?
          fufuhafuo;hfoi dhfoiewhfhew hedhvoiewh eoifhewohf e;jfuoeifhewh
          ejfhoewihewlknvl pdjvhi miehfohweoi ihefoiew jbhvhvouh ehiohewoh
          nlehvih livhidh hoidvpd opewfpjewjb jioh opojjh efhew hfhoiewdh
          oihfihebj eifheijhkjb?
        </p>
      </div>
    </div>
  );
}
