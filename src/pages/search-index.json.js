export async function GET() {
  const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));

  const posts = allPosts.map((post) => {
    let bodyText = '';
    try {
      const compiled = typeof post.compiledContent === 'function' ? post.compiledContent() : String(post.compiledContent || '');
      bodyText = String(compiled).replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '').replace(/\s+/g, ' ').trim().slice(0, 500);
    } catch (e) {
      bodyText = '';
    }

    return {
      title: post.frontmatter.title,
      description: post.frontmatter.description || '',
      tags: post.frontmatter.tags || [],
      category: post.frontmatter.category || 'uncategorized',
      pubDate: post.frontmatter.pubDate,
      url: post.url,
      bodyText,
    };
  });

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}
