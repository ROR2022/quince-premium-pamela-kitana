import { useState, useCallback } from 'react'

export function useDebugLog(maxMessages = 50) {
  const [showDebug, setShowDebug] = useState(false)
  const [debugMessages, setDebugMessages] = useState<string[]>([])
  
  const debugLog = useCallback((message: string) => {
    console.log(message)
    setDebugMessages(prev => [message, ...prev].slice(0, maxMessages))
  }, [maxMessages])
  
  const toggleDebugPanel = useCallback(() => {
    setShowDebug(prev => !prev)
  }, [])
  
  return {
    showDebug,
    setShowDebug,
    debugMessages,
    debugLog,
    toggleDebugPanel
  }
}
