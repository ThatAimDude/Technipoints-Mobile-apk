'use client'

import { Progress } from "@/components/ui/progress"
import './grades.css'
import './teacher-view.css'
import HeaderTop from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function Dashboard() {
  return (

    <div>
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
          <Footer />
    </div>
    
  )
}

