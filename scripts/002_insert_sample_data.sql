-- Insert sample categories
INSERT INTO public.categories (name, slug, description, color, post_count) VALUES
('Tümü', 'all', 'Tüm konular', '#6366F1', 156),
('React', 'react', 'React ile ilgili sorular ve tartışmalar', '#61DAFB', 45),
('TypeScript', 'typescript', 'TypeScript geliştirme konuları', '#3178C6', 32),
('Node.js', 'nodejs', 'Node.js backend geliştirme', '#339933', 28),
('Vue.js', 'vuejs', 'Vue.js framework tartışmaları', '#4FC08D', 21),
('Python', 'python', 'Python programlama dili', '#3776AB', 18),
('Genel', 'general', 'Genel yazılım geliştirme konuları', '#6B7280', 12)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample posts (these will be visible to all users)
INSERT INTO public.posts (title, content, author_id, category_id, view_count, reply_count, like_count, created_at) 
SELECT 
  'React 18 ile Server Components nasıl kullanılır?',
  'React 18''in yeni Server Components özelliği hakkında detaylı bir rehber...',
  (SELECT id FROM auth.users LIMIT 1),
  (SELECT id FROM public.categories WHERE slug = 'react' LIMIT 1),
  156,
  24,
  18,
  NOW() - INTERVAL '2 days'
WHERE EXISTS (SELECT 1 FROM auth.users LIMIT 1);

INSERT INTO public.posts (title, content, author_id, category_id, view_count, reply_count, like_count, is_solved, created_at)
SELECT 
  'TypeScript ile daha iyi kod yazma teknikleri',
  'TypeScript kullanırken dikkat edilmesi gereken noktalar ve best practices...',
  (SELECT id FROM auth.users LIMIT 1),
  (SELECT id FROM public.categories WHERE slug = 'typescript' LIMIT 1),
  89,
  12,
  15,
  true,
  NOW() - INTERVAL '1 day'
WHERE EXISTS (SELECT 1 FROM auth.users LIMIT 1);

INSERT INTO public.posts (title, content, author_id, category_id, view_count, reply_count, like_count, created_at)
SELECT 
  'Node.js performans optimizasyonu için öneriler',
  'Node.js uygulamalarınızı nasıl daha hızlı hale getirebilirsiniz...',
  (SELECT id FROM auth.users LIMIT 1),
  (SELECT id FROM public.categories WHERE slug = 'nodejs' LIMIT 1),
  67,
  8,
  12,
  NOW() - INTERVAL '3 hours'
WHERE EXISTS (SELECT 1 FROM auth.users LIMIT 1);
