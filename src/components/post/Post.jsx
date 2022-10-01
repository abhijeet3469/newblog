import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">th each refresh of the page.</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc">
        Welcome to the website. If you're here, you're likely looking to find
        random words. Random Word Generator is the perfect tool to help you do
        this. While this tool isn't a word creator, it is a word generator that
        will generate random words for a variety of activities or uses. Even
        better, it allows you to adjust the parameters of the random words to
        best fit your needs.
        Welcome to the website. If you're here, you're likely looking to find
        random words. Random Word Generator is the perfect tool to help you do
        this. While this tool isn't a word creator, it is a word generator that
        will generate random words for a variety of activities or uses. Even
        better, it allows you to adjust the parameters of the random words to
        best fit your needs.
        Welcome to the website. If you're here, you're likely looking to find
        random words. Random Word Generator is the perfect tool to help you do
        this. While this tool isn't a word creator, it is a word generator that
        will generate random words for a variety of activities or uses. Even
        better, it allows you to adjust the parameters of the random words to
        best fit your needs.
      </p>
    </div>
  );
}
