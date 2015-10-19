import sample from 'lodash/collection/sample';
import take from 'lodash/array/take';

import data from 'data/posts.json';

class PostsActions {

  constructor() {
    this.generateActions(
      'remove', 'fetchSuccess', 'addSuccess',
      'fetchByIDSuccess'
    );
  }

  add() {
    const promise = (resolve) => {
      // fake xhr
      this.alt.getActions('requests').start();
      setTimeout(() => {
        this.actions.addSuccess(sample(data.posts));
        this.alt.getActions('requests').success();
        return resolve();
      }, 300);
    };
    this.alt.resolve(promise);
  }

  fetch() {
    const promise = (resolve) => {
      this.alt.getActions('requests').start();
      setTimeout(() => {
        this.actions.fetchSuccess(take(data.posts, 10));
        this.alt.getActions('requests').success();
        return resolve();
      }, 300);
    };
    this.alt.resolve(promise);
  }

  fetchByID(id) {
    const promise = (resolve) => {
      this.alt.getActions('requests').start();
      setTimeout(() => {
        const user = data.posts.find((u) => u.id === id);
        this.actions.fetchByIDSuccess(user);
        this.alt.getActions('requests').success();
        return resolve();
      }, 300);
    };

    this.alt.resolve(promise);
  }

}

export default PostsActions;
