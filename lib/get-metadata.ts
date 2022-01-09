import fs from 'fs';
import { join } from 'path';

const writingDir = join(process.cwd(), 'pages/writings');

export async function getwritingsmeta() {
  const slugs = fs.readdirSync(writingDir);
  const writingSlugs = slugs.filter((slug) => slug.includes('.mdx'));
  const metaArray: any = [];

  for (let index = 0; index < writingSlugs.length; index++) {
    const slug = writingSlugs[index];

    try {
      const { meta } = await import(`../pages/writings/${slug}`);
      if (meta) {
        metaArray.push({ ...meta, slug: slug.slice(0, -4) });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return metaArray;
}
