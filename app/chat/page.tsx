"use client"

import type React from "react"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, ArrowLeft, Sparkles, User, Bot, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
  })

  const [showWelcome, setShowWelcome] = useState(messages.length === 0)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setShowWelcome(false)
      handleSubmit(e)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    const syntheticEvent = {
      target: { value: question },
    } as React.ChangeEvent<HTMLInputElement>

    handleInputChange(syntheticEvent)
    setShowWelcome(false)

    // Create a synthetic form event
    const formEvent = new Event("submit", { bubbles: true, cancelable: true }) as any
    formEvent.preventDefault = () => {}
    handleSubmit(formEvent)
  }

  const suggestedQuestions = [
    "What time does the library close?",
    "How do I join student organizations?",
    "Where can I eat on campus?",
    "What are the enrollment requirements?",
    "How do I check my class schedule?",
    "Tell me about PUP's academic calendar",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 animate-fade-in">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="transition-all duration-300 hover:scale-105 hover:bg-red-50"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Back
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-red-700">Isko.ai</span>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700">Online</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="h-[calc(100vh-200px)] flex flex-col border-red-200">
          <CardHeader className="border-b bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <span>Chat with Isko.ai</span>
            </CardTitle>
            <p className="text-red-100">Your friendly AI buddy for PUP campus life</p>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-red-800 font-medium">Connection Error</p>
                    <p className="text-red-600 text-sm">
                      Unable to connect to Isko.ai. Please check your internet connection and try again.
                    </p>
                  </div>
                </div>
              )}

              {showWelcome && (
                <div className="text-center py-8 animate-fade-in-up">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                    <Sparkles className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-slide-up">Kumusta, Isko! 👋</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto animate-fade-in-delay">
                    I'm your AI buddy here to help with anything about PUP campus life. Ask me about schedules, orgs,
                    food spots, policies, or student tips!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto animate-fade-in-delay-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto p-3 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => handleSuggestedQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 animate-slide-in-message ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Avatar className="w-8 h-8 transition-transform duration-300 hover:scale-110">
                      <AvatarFallback
                        className={`${message.role === "user" ? "bg-red-100 text-red-700" : "bg-red-100 text-red-700"} transition-colors duration-300`}
                      >
                        {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 transition-all duration-300 hover:shadow-md ${
                        message.role === "user"
                          ? "bg-red-600 text-white ml-auto"
                          : "bg-red-50 text-gray-900 border border-red-100"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-red-100 text-red-700">
                        <Bot className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <form onSubmit={handleFormSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything about PUP campus life..."
                  className="flex-1 border-red-200 focus:border-red-400 focus:ring-red-400"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Send className="w-4 h-4 transition-transform duration-300 hover:translate-x-1" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Isko.ai is here to help with PUP-related questions. For official matters, please contact the university
                directly.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
