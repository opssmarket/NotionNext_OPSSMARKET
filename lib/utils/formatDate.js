import BLOG from '@/blog.config'

/**
 * 格式化日期（意大利格式 DD/MM/YYYY）
 */
export default function formatDate(date) {
  if (!date) return ''

  const d = new Date(date)

  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()

  return `${day}/${month}/${year}`
}

/**
 * 时间戳格式化（默认意大利格式）
 */
export function formatDateFmt(timestamp, fmt = 'DD/MM/YYYY') {
  const date = new Date(timestamp)

  const map = {
    DD: String(date.getDate()).padStart(2, '0'),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    YYYY: date.getFullYear(),
    hh: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0')
  }

  return fmt.replace(/DD|MM|YYYY|hh|mm|ss/g, k => map[k])
}
