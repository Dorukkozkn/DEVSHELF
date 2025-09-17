import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Kayıt işlemi tamamlandı!</CardTitle>
              <CardDescription>Hesabınız başarıyla oluşturuldu</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Başarıyla kayıt oldunuz. Artık forum'u kullanmaya başlayabilirsiniz.
              </p>
              <Link href="/forum">
                <Button className="w-full">Forum'a Git</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
