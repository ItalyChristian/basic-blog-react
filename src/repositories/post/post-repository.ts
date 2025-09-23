import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublished(): Promise<PostModel[]>;
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublished(slug: string): Promise<PostModel>;
}
