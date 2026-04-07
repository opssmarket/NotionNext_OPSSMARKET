import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Copyright ©</span>
      <a href='你的链接' className='underline justify-start'>
        你的名字或站点名
      </a>
    </div>
  )
}


