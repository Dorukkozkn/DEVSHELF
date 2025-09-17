import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Building, ArrowLeft, Star, MapPin, Calendar } from "lucide-react"

export default function KiminleCalisiyoruz() {
  const clients = [
    {
      name: "TechStart Yazılım",
      logo: "/placeholder-ngvo1.png",
      industry: "Yazılım",
      project: "E-Ticaret Platformu",
      description: "Modern ve kullanıcı dostu e-ticaret sitesi geliştirdik",
      location: "İstanbul",
      year: "2024",
      rating: 5,
    },
    {
      name: "GreenLife Organik",
      logo: "/placeholder-vfrnc.png",
      industry: "Gıda",
      project: "Kurumsal Web Sitesi",
      description: "Organik ürünler için SEO odaklı kurumsal site",
      location: "Ankara",
      year: "2024",
      rating: 5,
    },
    {
      name: "FinanceHub",
      logo: "/placeholder-oy4kf.png",
      industry: "Finans",
      project: "Fintech Uygulaması",
      description: "Güvenli ve hızlı finansal işlemler platformu",
      location: "İzmir",
      year: "2023",
      rating: 5,
    },
    {
      name: "EduTech Academy",
      logo: "/placeholder-9tvhe.png",
      industry: "Eğitim",
      project: "Online Eğitim Platformu",
      description: "İnteraktif online kurs yönetim sistemi",
      location: "Bursa",
      year: "2023",
      rating: 5,
    },
    {
      name: "HealthCare Plus",
      logo: "/placeholder-myyh9.png",
      industry: "Sağlık",
      project: "Hasta Yönetim Sistemi",
      description: "Dijital sağlık kayıtları ve randevu sistemi",
      location: "Antalya",
      year: "2023",
      rating: 5,
    },
    {
      name: "AutoDealer Pro",
      logo: "/placeholder-sqy3l.png",
      industry: "Otomotiv",
      project: "Araç Satış Platformu",
      description: "Kapsamlı araç alım-satım web sitesi",
      location: "Adana",
      year: "2024",
      rating: 5,
    },
  ]

  const stats = [
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "100+", label: "Tamamlanan Proje" },
    { number: "15+", label: "Farklı Sektör" },
    { number: "99%", label: "Müşteri Memnuniyeti" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">DevShelf</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ana Sayfa
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Building className="h-4 w-4 mr-1" />
            Referanslarımız
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Kiminle
            <span className="text-blue-600"> Çalışıyoruz</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Farklı sektörlerden müşterilerimizle gerçekleştirdiğimiz başarılı projeler ve aldığımız geri bildirimler
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Müşterilerimiz</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Çeşitli sektörlerden müşterilerimizle gerçekleştirdiğimiz projeler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-12" />
                  <Badge variant="outline">{client.industry}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{client.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600 mb-2">{client.project}</CardDescription>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{client.description}</p>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {client.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {client.year}
                  </div>
                </div>

                <div className="flex items-center mt-3">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-slate-600">({client.rating}.0)</span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Müşterilerimizin bizimle çalışma deneyimleri hakkında söyledikleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "DevShelf ekibi ile çalışmak harika bir deneyimdi. Projemizi zamanında ve beklentilerimizin üzerinde
                teslim ettiler."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">AK</span>
                </div>
                <div>
                  <div className="font-semibold">Ahmet Kaya</div>
                  <div className="text-sm text-slate-500">TechStart Yazılım CEO</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "Profesyonel yaklaşımları ve teknik bilgileri sayesinde hayal ettiğimiz web sitesine kavuştuk.
                Kesinlikle tavsiye ederim."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">SY</span>
                </div>
                <div>
                  <div className="font-semibold">Selin Yılmaz</div>
                  <div className="text-sm text-slate-500">GreenLife Organik Kurucu</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-white dark:bg-slate-800">
            <CardHeader>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "Fintech projemiz için güvenlik ve performans kritikti. DevShelf bu konularda beklentilerimizi
                fazlasıyla karşıladı."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">MÖ</span>
                </div>
                <div>
                  <div className="font-semibold">Murat Özkan</div>
                  <div className="text-sm text-slate-500">FinanceHub CTO</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Siz de Aramıza Katılın!</h2>
          <p className="text-xl mb-8 text-white/90">
            Başarılı projeler gerçekleştiren müşterilerimize katılın ve işinizi dijital dünyada büyütün.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-slate-100 font-semibold" size="lg" asChild>
            <a href="/#pricing">Bizimle Çalış</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6" />
                <span className="text-xl font-bold">DevShelf</span>
              </div>
              <p className="text-slate-400">Profesyonel web tasarım ve geliştirme hizmetleri.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hizmetler</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    Web Tasarım
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    E-Ticaret
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    SEO Optimizasyonu
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white">
                    Mobil Uygulama
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/kiminle-calisiyoruz" className="hover:text-white">
                    Kiminle Çalışıyoruz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sosyal</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 DevShelf. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
