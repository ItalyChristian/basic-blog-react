import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  try {
    // await drizzleDb.delete(postsTable); // usando temporariamente para nao precisar alterar slugs
    await drizzleDb.insert(postsTable).values(posts);

    console.log(`${posts.length} posts foram salvos na base de dados`);
  } catch (e) {
    console.log('Ocorreu um erro...');
    console.log('');
    console.log(e);
  }
})();
