import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { AnimatePresence, motion } from 'motion/react'
import { MessageSquare, X, Send, Sparkles } from 'lucide-react'

const SUGGESTED_QUESTIONS = [
  "What projects has Max worked on?",
  "Tell me about Max's experience",
  "What is Max's tech stack?",
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: '/api/chat',
  })

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSuggestedQuestion = (question: string) => {
    const event = { preventDefault: () => {} } as React.FormEvent
    handleInputChange({ target: { value: question } } as React.ChangeEvent<HTMLInputElement>)
    setTimeout(() => handleSubmit(event), 50)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors duration-200"
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[560px] rounded-2xl border border-white/[0.08] bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Ask about Max</h3>
                <p className="text-[11px] text-muted-foreground">Powered by AI</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 min-h-[280px] max-h-[380px]">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Hi! I can answer questions about Max's background, projects, skills, and experience. What would you like to know?
                  </p>
                  <div className="space-y-2">
                    {SUGGESTED_QUESTIONS.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="w-full text-left px-4 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-muted-foreground hover:border-primary/20 hover:text-foreground transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className={
                      message.role === 'user'
                        ? 'px-4 py-2.5 rounded-2xl rounded-br-md bg-primary text-primary-foreground text-sm max-w-[85%]'
                        : 'px-4 py-2.5 rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.03] text-sm text-muted-foreground max-w-[85%]'
                    }
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start">
                  <div className="px-4 py-2.5 rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.03]">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-white/[0.06] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Max..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
