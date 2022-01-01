import fs from 'fs';
import { join } from 'path';

const writingDir = join(process.cwd(), 'pages/writing');

export async function getwritingsmeta() {
  const slugs = fs.readdirSync(writingDir);
  const writingSlugs = slugs.filter((slug) => slug.includes('.mdx'));
  const metaArray: any = [];

  for (let index = 0; index < writingSlugs.length; index++) {
    const slug = writingSlugs[index];

    try {
      const { meta } = await import(`../pages/writing/${slug}`);
      if (meta) {
        metaArray.push(meta);
      }
    } catch (error) {
      console.error(error);
    }

    console.log('slugs', slug);
  }

  return metaArray;
}
