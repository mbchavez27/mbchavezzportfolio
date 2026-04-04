import { groq } from '@ai-sdk/groq'
import { streamText } from 'ai'
import { PORTFOLIO_CONTEXT } from '../src/app/data/portfolio-context'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: groq('llama-3.1-8b-instant'),
    system: PORTFOLIO_CONTEXT,
    messages,
    temperature: 0.7,
    maxTokens: 500,
  })

  return result.toDataStreamResponse()
}
