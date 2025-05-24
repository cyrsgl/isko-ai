import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, Users, MapPin, BookOpen, Heart, Star, ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-red-700">Isko.ai</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-105"
            >
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </nav>
          <Button
            className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <a href="/chat">Try Isko.ai</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 animate-bounce-subtle">
            Made by Iskos, for Iskos ❤️
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Your AI Buddy for
            <span className="text-red-600 block animate-slide-up-delay">PUP Campus Life</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delay">
            From class schedules to food spots, orgs to policies — Isko.ai is like the upperclassman bestie you never
            had. Get instant answers to all your campus questions, whether you're a freshie or a senior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
              asChild
            >
              <a href="/chat">
                <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Start Chatting
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-200 text-red-700 hover:bg-red-50 text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Know About PUP</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Isko.ai has got your back with instant answers to all your campus questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <Calendar className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">Class Schedules</CardTitle>
                <CardDescription>
                  Get your class schedules, room assignments, and academic calendar info instantly
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <Users className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">Student Organizations</CardTitle>
                <CardDescription>
                  Discover orgs, clubs, and student activities that match your interests
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <MapPin className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">Campus Food Spots</CardTitle>
                <CardDescription>
                  Find the best places to eat on campus, from canteens to nearby restaurants
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <BookOpen className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">University Policies</CardTitle>
                <CardDescription>Understand academic policies, requirements, and procedures clearly</CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <CardHeader>
                <Heart className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">Student Life Tips</CardTitle>
                <CardDescription>
                  Get advice on campus life, study tips, and making the most of your PUP experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="border-red-100 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <Star className="w-10 h-10 text-red-600 mb-2 transition-transform duration-300 hover:scale-110" />
                <CardTitle className="text-red-700">24/7 Support</CardTitle>
                <CardDescription>Your AI buddy is always available, ready to help whenever you need it</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">Built with Heart for PUP Students</h2>
              <p className="text-xl mb-6 text-red-100">
                Isko.ai isn't just another chatbot — it's your digital kuya/ate who understands the PUP experience. We
                know the struggles of finding your way around campus, keeping track of deadlines, and navigating
                university life.
              </p>
              <p className="text-lg text-red-100 mb-8">
                That's why we created an AI assistant that speaks your language, understands your needs, and provides
                the kind of helpful, friendly guidance you'd get from a caring upperclassman.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-700 hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Meet Your AI Buddy
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-slide-in-right">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-lg">For Iskos, by Iskos</h3>
                    <p className="text-red-100">Created by students who understand your journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Always Learning</h3>
                    <p className="text-red-100">Constantly updated with the latest campus info</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-lg">Friendly & Approachable</h3>
                    <p className="text-red-100">No judgment, just helpful answers when you need them</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Meet Your AI Buddy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of PUP students who are already getting instant answers to their campus questions
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 transition-all duration-300 hover:scale-110 hover:shadow-2xl transform animate-pulse-subtle"
            asChild
          >
            <a href="/chat">
              <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-12" />
              Start Your Conversation
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">Free to use • No signup required • Available 24/7</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Isko.ai</span>
              </div>
              <p className="text-gray-400">Your AI buddy for PUP campus life, made with ❤️ by Iskos for Iskos.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.pup.edu.ph/" className="hover:text-white transition-colors">
                    PUP Official Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Suggestions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Isko.ai. Made with love for the PUP community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
