-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  post_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE CASCADE,
  view_count INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  is_solved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create replies table
CREATE TABLE IF NOT EXISTS public.replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES public.replies(id) ON DELETE CASCADE,
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create post_likes table
CREATE TABLE IF NOT EXISTS public.post_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, post_id)
);

-- Create reply_likes table
CREATE TABLE IF NOT EXISTS public.reply_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reply_id UUID NOT NULL REFERENCES public.replies(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, reply_id)
);

-- Create post_tags table
CREATE TABLE IF NOT EXISTS public.post_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reply_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "profiles_select_all" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_own" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- RLS Policies for categories (read-only for users)
CREATE POLICY "categories_select_all" ON public.categories FOR SELECT USING (true);

-- RLS Policies for posts
CREATE POLICY "posts_select_all" ON public.posts FOR SELECT USING (true);
CREATE POLICY "posts_insert_own" ON public.posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "posts_update_own" ON public.posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "posts_delete_own" ON public.posts FOR DELETE USING (auth.uid() = author_id);

-- RLS Policies for replies
CREATE POLICY "replies_select_all" ON public.replies FOR SELECT USING (true);
CREATE POLICY "replies_insert_own" ON public.replies FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "replies_update_own" ON public.replies FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "replies_delete_own" ON public.replies FOR DELETE USING (auth.uid() = author_id);

-- RLS Policies for post_likes
CREATE POLICY "post_likes_select_all" ON public.post_likes FOR SELECT USING (true);
CREATE POLICY "post_likes_insert_own" ON public.post_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "post_likes_delete_own" ON public.post_likes FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for reply_likes
CREATE POLICY "reply_likes_select_all" ON public.reply_likes FOR SELECT USING (true);
CREATE POLICY "reply_likes_insert_own" ON public.reply_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "reply_likes_delete_own" ON public.reply_likes FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for post_tags
CREATE POLICY "post_tags_select_all" ON public.post_tags FOR SELECT USING (true);
CREATE POLICY "post_tags_insert_with_post" ON public.post_tags FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.posts WHERE id = post_id AND author_id = auth.uid())
);
CREATE POLICY "post_tags_delete_with_post" ON public.post_tags FOR DELETE USING (
  EXISTS (SELECT 1 FROM public.posts WHERE id = post_id AND author_id = auth.uid())
);
