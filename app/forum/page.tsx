import { createClient } from "@/lib/supabase/server"
import { Search, Plus, Eye, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface Category {
  id: string
  name: string
  slug: string
  post_count: number
  color: string
}

interface Post {
  id: string
  title: string
  content: string
  view_count: number
  reply_count: number
  like_count: number
  is_solved: boolean
  created_at: string
  profiles: {
    username: string
    display_name: string
  }
  categories: {
    name: string
    color: string
  }
  post_tags: {
    tag: string
  }[]
}

export default async function ForumPage() {
  const supabase = await createClient()

  // Fetch categories
  const { data: categories } = await supabase.from("categories").select("*").order("post_count", { ascending: false })

  // Fetch posts with related data
  const { data: posts } = await supabase
    .from("posts")
    .select(`
      *,
      profiles:author_id (username, display_name),
      categories (name, color),
      post_tags (tag)
    `)
    .order("created_at", { ascending: false })
    .limit(10)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Forum</h1>
          <p className="text-gray-600">Yazılım geliştirme hakkında sorular sorun, deneyimlerinizi paylaşın</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h2>
              <div className="space-y-2">
                {categories?.map((category: Category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                      <span className="text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{category.post_count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forum Rules */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Forum Kuralları</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Saygılı ve yapıcı olun</li>
                <li>• Spam yapmayın</li>
                <li>• Doğru kategoriyi seçin</li>
                <li>• Arama yapmadan önce sorun</li>
                <li>• Çözülen soruları işaretleyin</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and New Topic */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Forum'da ara..." className="pl-10" />
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>En Yeni</option>
                    <option>En Popüler</option>
                    <option>En Çok Beğenilen</option>
                  </select>
                  {user ? (
                    <Link href="/forum/new">
                      <Button className="bg-gray-900 hover:bg-gray-800">
                        <Plus className="w-4 h-4 mr-2" />
                        Yeni Konu
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/auth/login">
                      <Button className="bg-gray-900 hover:bg-gray-800">
                        <Plus className="w-4 h-4 mr-2" />
                        Yeni Konu
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts?.map((post: Post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {post.profiles?.display_name?.charAt(0) || post.profiles?.username?.charAt(0) || "U"}
                        </div>
                        <span className="text-sm font-medium text-gray-900">@{post.profiles?.username || "user"}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          {new Date(post.created_at).toLocaleDateString("tr-TR")}
                        </span>
                        {post.is_solved && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Çözüldü</span>
                        )}
                      </div>

                      <Link href={`/forum/post/${post.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.content.substring(0, 150)}...</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.post_tags?.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tag.tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.view_count} görüntüleme</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.reply_count} yanıt</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.like_count} beğeni</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-4 text-right">
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: post.categories?.color }}
                      >
                        {post.categories?.name}
                      </div>
                      <div className="mt-2">
                        <Button variant="ghost" size="sm">
                          Yanıtla
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
