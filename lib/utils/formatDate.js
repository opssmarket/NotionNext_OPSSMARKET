import BLOG from '@/blog.config'

/**
 * 格式化日期为 DD/MM/YYYY
 * @param {Date | string | number} date
 * @returns {string}
 */
export default function formatDate(date) {
  if (!date) return ''
  return formatDateFmt(date, 'dd/MM/yyyy')
}

/**
 * 时间戳格式化（支持自定义格式）
 * @param {Date | string | number} timestamp
 * @param {string} fmt 例如：yyyy-MM-dd hh:mm:ss
 * @returns {string}
 */
export function formatDateFmt(timestamp, fmt = 'dd/MM/yyyy') {
  if (!timestamp) return ''

  const date = new Date(timestamp)

  if (isNaN(date.getTime())) return ''

  const map = {
    'M+': date.getMonth() + 1, // 月
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }

  // 年
  fmt = fmt.replace(/(y+)/g, (match) => {
    return String(date.getFullYear()).slice(4 - match.length)
  })

  // 其他
  Object.keys(map).forEach((k) => {
    fmt = fmt.replace(new RegExp(`(${k})`, 'g'), (match) => {
      const val = String(map[k])
      return match.length === 1 ? val : val.padStart(match.length, '0')
    })
  })

  return fmt.trim()
}
