'use client'

import { getEmployees } from "@infra/http/employee/get-employees"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"


export default function Home() {
  const { data } = useSession()

  const { data: employees, isFetching } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
  })


  console.log(employees)

  return (
    <>
      <h2>{data.user.accessToken}</h2>
      <h2>Autenticado</h2>
    </>
  )
}
