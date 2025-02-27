'use client'

import { session } from "@infra/http/internal/session"
import { useQuery } from "@tanstack/react-query"

export function useSession(){
  const {data: sessionTes} = useQuery({
    queryKey: ["session"],
    queryFn: session
  })
  return {
    sessionTes
  }
}
