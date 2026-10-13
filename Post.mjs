class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  publish() {
    console.log(`${this.title}: ${this.content}`);
  }
}

export default Post;