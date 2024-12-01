'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from './icons'

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="space-y-4 py-2 pb-4">
      <form onSubmit={onSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">School Email</Label>
          <Input id="email" placeholder="student@school.edu" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="student-id">Student ID</Label>
          <Input id="student-id" placeholder="e.g., 12345678" required />
        </div>
        <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={isLoading}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign Up
        </Button>
      </form>
      <div className="text-sm text-center">
        By signing up, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
        {' '}and{' '}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading} className="w-full">
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}

