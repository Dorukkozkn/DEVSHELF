"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Code,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Award,
  Clock,
  Shield,
  Mail,
  Phone,
} from "lucide-react"

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const faqData = [
    {
      question: "Web sitesi ne kadar sürede teslim edilir?",
      answer:
        "Başlangıç paketi için 5-7 iş günü, Profesyonel paket için 10-14 iş günü, Kurumsal paket için 3-4 hafta sürmektedir. Proje karmaşıklığına göre süre değişebilir.",
    },
    {
      question: "Tasarımda değişiklik yapabilir miyim?",
      answer:
        "Elbette! Tasarım sürecinde 3 revizyon hakkınız bulunmaktadır. Ek revizyonlar için ek ücret alınmaktadır.",
    },
    {
      question: "Hosting ve domain dahil mi?",
      answer:
        "Hayır, hosting ve domain maliyetleri ayrıdır. Size uygun hosting önerileri sunabilir ve kurulum sürecinde yardımcı olabiliriz.",
    },
    {
      question: "Mobil uyumlu olacak mı?",
      answer:
        "Evet, tüm web sitelerimiz mobil cihazlarda mükemmel görünecek şekilde responsive tasarım ile geliştirilmektedir.",
    },
    {
      question: "SEO optimizasyonu nedir?",
      answer:
        "Web sitenizin Google'da daha iyi sıralanması için teknik optimizasyonlar, meta etiketler, hız optimizasyonu ve içerik yapılandırması yapılmaktadır.",
    },
    {
      question: "Destek süresi bittikten sonra ne olur?",
      answer:
        "Destek süreniz bittikten sonra aylık veya yıllık destek paketlerimizden birini seçebilir, ya da ihtiyaç duyduğunuzda saatlik destek alabilirsiniz.",
    },
    {
      question: "Ödeme nasıl yapılır?",
      answer:
        "%50 peşin, %50 teslimatta olmak üzere iki taksitte ödeme alınmaktadır. Kredi kartı, havale/EFT ve kripto para ile ödeme kabul edilmektedir.",
    },
    {
      question: "Kaynak kodları teslim edilir mi?",
      answer:
        "Evet, proje tamamlandıktan sonra tüm kaynak kodları size teslim edilmektedir. Web sitenizin tam sahipliği size aittir.",
    },
  ]

  return (
    <div className="min-h-screen bg-sidebar">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">DevShelf</span>
          </div>

          <nav className="flex items-center space-x-6">
            <a
              href="#about"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              Hakkımızda
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              Fiyatlar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center bg-sidebar">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 animate-bounce">
            <Sparkles className="h-4 w-4 mr-1" />
            Profesyonel Web Tasarım Hizmetleri
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-up">
            🚀 Projelerinizi
            <span className="text-blue-600 "> Dünyaya</span>
            <br />
            Tanıtın
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Modern, hızlı ve SEO uyumlu web siteleri ile işinizi büyütün. Profesyonel tasarım ve geliştirme hizmetleri.
          </p>
          <div className="flex justify-center animate-bounce-in">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToPricing}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Bizimle Çalış
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        data-animate="about"
        className={`container mx-auto px-4 py-20 dark:bg-slate-900 bg-sidebar transition-all duration-1000 ${
          visibleSections.has("about") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-left">
              Biz Kimiz?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-slide-in-right">
              DevShelf olarak, işletmelerin dijital dünyada güçlü bir varlık oluşturmasına yardımcı olan deneyimli bir
              web tasarım ve geliştirme ekibiyiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Misyonumuz</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Her büyüklükteki işletmenin dijital dünyada başarılı olması için ihtiyaç duyduğu modern, kullanıcı dostu
                ve etkili web çözümleri sunmak. Müşterilerimizin hedeflerine ulaşmasına yardımcı olmak için en son
                teknolojileri ve tasarım trendlerini kullanıyoruz.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-slide-in-right">
              <div className="text-center p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-counter">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Tamamlanan Proje</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-counter">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Yıl Deneyim</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-counter">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">24+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Mutlu Müşteri</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-counter">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Destek</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Kalite Odaklı</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Her projede en yüksek kalite standartlarını uygulayarak müşteri memnuniyetini ön planda tutuyoruz
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-200">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Zamanında Teslimat</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Belirlenen sürelere uyarak projelerinizi zamanında teslim etmeyi garanti ediyoruz
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center sm:col-span-2 lg:col-span-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-400">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Güvenilir Destek</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Proje teslimi sonrasında da yanınızda olmaya devam ediyor, sürekli destek sağlıyoruz
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="container mx-auto px-4 py-16 bg-sidebar">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4 animate-slide-in-left">
            Çalıştığımız Firmalar
          </h2>
          <p className="text-slate-600 dark:text-slate-300 animate-slide-in-right">
            Güvenilir teknoloji şirketleri ile ortaklık kuruyoruz
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center justify-center h-16 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-sm border flex-shrink-0 animate-slide-in-left">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fa960e1bca5ed8add6c38b34daed4d80-removebg-preview-LxSzxW5h2lkuRYYRWtWHVtHPt2KUEH.png"
                alt="Client Logo 1"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-sm border flex-shrink-0 animate-slide-in-left animation-delay-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OlOUKhcsVKKikJZmpJs6xgKFuxgVTq.png"
                alt="TEDDMUN"
                className="h-12 w-20 object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-sm border flex-shrink-0 animate-slide-in-left animation-delay-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20Resmi%202025-09-17%2019.12.10-fW5e8H42YZeEhrCM3WqWqsoj41d1pi.png"
                alt="Client Logo 3"
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-sidebar">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-left">
            Neden DevShelf?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-slide-in-right">
            Web tasarım ve geliştirme hizmetlerimizle işinizi dijital dünyada öne çıkarın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Modern Tasarım</CardTitle>
              <CardDescription>
                Güncel tasarım trendleri ve kullanıcı deneyimi odaklı profesyonel web siteleri
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-200">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Müşteri Odaklı</CardTitle>
              <CardDescription>İhtiyaçlarınızı anlayarak size özel çözümler geliştiriyoruz</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up animation-delay-400">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>SEO Optimizasyonu</CardTitle>
              <CardDescription>Google'da üst sıralarda yer almanız için teknik SEO optimizasyonu</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        data-animate="pricing"
        className={`container mx-auto px-4 py-20 dark:bg-slate-800/50 bg-sidebar transition-all duration-1000 ${
          visibleSections.has("pricing") ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-left">
            Fiyatlandırma
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-slide-in-right">
            İhtiyacınıza uygun paketi seçin ve profesyonel web sitenize sahip olun
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="relative transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 animate-fade-in-up transform hover:-translate-y-2">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Başlangıç</CardTitle>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-counter">
                ₺2,500
                <span className="text-lg font-normal text-slate-600 dark:text-slate-400">/proje</span>
              </div>
              <CardDescription>Küçük işletmeler ve kişisel projeler için</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center animate-slide-in-left">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>5 sayfa responsive
                  tasarım
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Mobil uyumlu
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  SEO optimizasyonu
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  İletişim formu
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>1 ay ücretsiz destek
                </li>
              </ul>
              <Button
                className="w-full bg-transparent transform hover:scale-105 transition-all duration-300"
                variant="outline"
              >
                Başla
              </Button>
            </div>
          </Card>

          {/* Professional Plan */}
          <Card className="relative border-blue-500 border-2 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 animate-fade-in-up animation-delay-200 transform hover:-translate-y-4">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
              <Badge className="bg-blue-500 text-white px-4 py-1">En Popüler</Badge>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Profesyonel</CardTitle>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-counter">
                ₺4,000
                <span className="text-lg font-normal text-slate-600 dark:text-slate-400">/proje</span>
              </div>
              <CardDescription>Büyüyen işletmeler için ideal</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center animate-slide-in-left">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  15 sayfa responsive tasarım
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Sosyal medya entegrasyonu
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>3 ay ücretsiz destek
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Google Analytics
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Başla
              </Button>
            </div>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-10 animate-fade-in-up animation-delay-400 transform hover:-translate-y-2">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Kurumsal</CardTitle>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-counter">
                ₺10,000
                <span className="text-lg font-normal text-slate-600 dark:text-slate-400">/proje</span>
              </div>
              <CardDescription>Büyük şirketler için özel çözümler</CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center animate-slide-in-left">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Sınırsız sayfa
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Özel tasarım ve geliştirme
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-200">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Çoklu dil desteği
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>6 ay ücretsiz destek
                </li>
                <li className="flex items-center animate-slide-in-left animation-delay-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Öncelikli destek
                </li>
              </ul>
              <Button
                className="w-full bg-transparent transform hover:scale-105 transition-all duration-300"
                variant="outline"
              >
                İletişime Geç
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12"></div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20 bg-sidebar">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-slide-in-left">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-slide-in-right">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                />
              </button>
              {/* Smooth slide animation to FAQ answers */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-sidebar">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">İletişim</h2>
          <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">
            Herhangi bir sorunuz veya yardımınız için bize ulaşın.
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              size="lg"
              onClick={scrollToContact}
            >
              <Mail className="h-5 w-5 mr-2" />
              E-posta Gönder
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              Telefonla İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20 bg-sidebar">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Hemen Başlayın!</h2>
          <p className="text-xl mb-8 text-slate-100">
            Profesyonel web siteniz için bugün bizimle iletişime geçin ve işinizi dijital dünyada büyütün.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              size="lg"
              onClick={scrollToContact}
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 animate-slide-in-left">
                <Code className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">DevShelf</span>
              </div>
              <p className="text-slate-400 animate-slide-in-right">Profesyonel web tasarım ve geliştirme hizmetleri.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 animate-slide-in-left">Hizmetler</h3>
              <ul className="space-y-2 text-slate-400 animate-slide-in-right">
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Web Tasarım
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    E-Ticaret
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    SEO Optimizasyonu
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Mobil Uygulama
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 animate-slide-in-left">Şirket</h3>
              <ul className="space-y-2 text-slate-400 animate-slide-in-right">
                <li>
                  <a href="/kiminle-calisiyoruz" className="hover:text-white">
                    Kiminle Çalışıyoruz
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
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
              <h3 className="font-semibold mb-4 animate-slide-in-left">Sosyal</h3>
              <ul className="space-y-2 text-slate-400 animate-slide-in-right">
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
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 animate-slide-in-up">
            <p>© 2025 DevShelf. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
