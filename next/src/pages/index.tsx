import { Box } from '@mui/material'
import { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '@/utils'

const Index: NextPage = () => {
  const url = 'http://localhost:3000/api/v1/health_check'
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <Box>
      <Box>Rails疎通確認</Box>
      <Box>レスポンスメッセージ: {data.message}</Box>
    </Box>
  )
}

export default Index
