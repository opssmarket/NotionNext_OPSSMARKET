import BLOG from '@/blog.config'

export default function formatDate(date) {
  if (!date) return ''
  return formatDateFmt(date, 'dd/MM/yyyy')
}

export function formatDateFmt(timestamp, fmt = 'dd/MM/yyyy') {
  if (!timestamp) return ''

  let date = new Date(timestamp)

  // ✅ 关键：兼容 Vercel / Node
  if (typeof timestamp === 'string') {
    if (timestamp.includes(' ') && !timestamp.includes('T')) {
      date = new Date(timestamp.replace(' ', 'T'))
    }
  }

  if (isNaN(date.getTime())) return ''

  const map = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }

  fmt = fmt.replace(/(y+)/g, (match) =>
    String(date.getFullYear()).slice(4 - match.length)
  )

  Object.keys(map).forEach((k) => {
    fmt = fmt.replace(new RegExp(`(${k})`, 'g'), (match) => {
      const val = String(map[k])
      return match.length === 1 ? val : val.padStart(match.length, '0')
    })
  })

  return fmt.trim()
}
