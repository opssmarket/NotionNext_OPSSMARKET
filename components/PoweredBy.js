import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Copyright ©</span>
      <a href='https://opssmarket.com' className='underline justify-start'>
        OPSS MARKET
      </a>
    </div>
  )
}


