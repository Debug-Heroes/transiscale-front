import { api } from "@lib/axios";

export async function getEmployees(){
  const response = await api.get('/employee')

  return response.data
}
