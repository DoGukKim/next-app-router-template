'use client'

import { QueryClientProvider as Provider } from '@tanstack/react-query'
import { queryClient } from './query-client'

type QueryClientProps = {
  children: React.ReactNode
}

const QueryClientProvider = ({ children }: QueryClientProps) => {
  return <Provider client={queryClient}>{children}</Provider>
}

export default QueryClientProvider
