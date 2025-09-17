"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode: "login" | "register"
}

export function AuthModal({ isOpen, onClose, defaultMode }: AuthModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent, mode: "login" | "register") => {
    e.preventDefault()
    // TODO: Implement authentication logic
    console.log(`${mode} attempt:`, { email, password, username })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>DevShelf'e Hoş Geldiniz</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultMode} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Giriş Yap</TabsTrigger>
            <TabsTrigger value="register">Kayıt Ol</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={(e) => handleSubmit(e, "login")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">E-posta</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Şifre</Label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Giriş Yap
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">veya</span>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              <Github className="mr-2 h-4 w-4" />
              GitHub ile Giriş
            </Button>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <form onSubmit={(e) => handleSubmit(e, "register")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-username">Kullanıcı Adı</Label>
                <Input
                  id="register-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email">E-posta</Label>
                <Input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Şifre</Label>
                <Input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Kayıt Ol
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">veya</span>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-transparent">
              <Github className="mr-2 h-4 w-4" />
              GitHub ile Kayıt Ol
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
