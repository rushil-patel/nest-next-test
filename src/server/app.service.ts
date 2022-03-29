import { Injectable, NotFoundException } from '@nestjs/common';
import { toArray } from 'rxjs';
import { from, of } from 'rxjs';

const POSTS = [
  { title: 'first harbor post', text: 'welcome to harbor', author: 0, id: 1 },
  { title: 'second harbor post', text: 'welcome to harbor', author: 0, id: 2 },
  { title: 'third harbor post', text: 'welcome to harbor', author: 0, id: 3 },
];

@Injectable()
export class AppService {
  getPosts() {
    return from(POSTS).pipe(toArray());
  }

  getPost(postId: number) {
    const post = POSTS.find(({ id }) => id === postId);
    if (!post) {
      throw new NotFoundException();
    }

    return of(post);
  }
}
