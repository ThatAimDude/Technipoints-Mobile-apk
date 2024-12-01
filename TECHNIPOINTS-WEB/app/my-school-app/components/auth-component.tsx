'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import LoginForm from './login-form'
import SignupForm from './signup-form'

export default function AuthComponent() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login')

  return (
    <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="flex flex-col items-center space-y-4 pb-2">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="School Logo"
          width={80}
          height={80}
          className="rounded-full bg-gray-200 p-2"
        />
        <h1 className="text-2xl font-bold text-center text-gray-800">Welcome to Our School</h1>
        <p className="text-sm text-center text-gray-600">Login or create an account to access school resources</p>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'signup')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

