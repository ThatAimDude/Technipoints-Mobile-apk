'use client'

import { Home, User } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import './grades.css'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import './teacher-view.css'
import HeaderTop from "@/components/ui/header"

export default function Dashboard() {
  return (
    <div className="dashboard">
      <HeaderTop />


      <main className="main-content">
        <h1 className="welcome-title">Witaj, Natalio</h1>

        <div className="data-table">
          <div className="table-header">
            <div>KLASA</div>
            <div>LICZBA UCZNIOW</div>
            <div>ŚREDNIA</div>
            <div>WYCHOWAWCA</div>
          </div>

          {[1, 2, 3].map((_, index) => (
            <div key={index} className="table-row">
              <div className="class-name">3A</div>
              <div>15</div>
              <div className="average-score">
                <Progress value={72} className="flex-1" />
                <span className="score-value">72%</span>
              </div>
              <div>KRZYSZTOF LESNIAK</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

