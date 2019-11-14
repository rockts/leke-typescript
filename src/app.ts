'use strict';
/**
 * TypeScript
 */

interface Post {
  title: string,
  content?: string,
  readonly paid?: boolean,
}

function createPost(post: Post) {
  console.log(post);
}

createPost({
  title: 'hello'
});

let post: Post;
post = {
  title: 'hello',
  paid: true,
};
post.paid = false;
