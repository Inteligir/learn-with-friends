class PostsStore {

  constructor() {
    this.bindActions(this.alt.getActions('posts'));
    this.posts = [];
  }

  static getByID(id) {
    const { posts } = this.getState();
    return { post: posts.find((post) => post.id === id) };
  }

  onRemove(index) {
    const posts = [ ...this.posts ];
    posts.splice(index, 1);

    this.posts = posts;
  }

  onAddSuccess(post) {
    this.posts = [ ...this.posts, post ];
  }

  onFetchSuccess(posts) {
    this.posts = posts.reduce((results, curr) => {
      const index = results.findIndex(({ id }) => id === curr.id);
      if (index > -1) {
        results[index] = curr;
        return results;
      } else {
        return [ curr, ...results ];
      }
    }, [ ...this.posts ]);
  }

  onFetchByIDSuccess(post) {
    const posts = [ ...this.posts ];
    const index = posts.findIndex(({ id }) => id === post.id);
    if (index > -1) {
      posts[index] = post;
      this.posts = posts;
    } else {
      this.posts = [ ...posts, post ];
    }
  }

}

export default PostsStore;
