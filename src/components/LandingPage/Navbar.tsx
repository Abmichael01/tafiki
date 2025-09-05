import Logo from '../Others/Logo'

export default function Navbar() {
  return (
    <div className='section-padding w-full flex justify-between items-center py-[60px] absolute top-0 left-0 right-0 z-[9999]'>
        <Logo className='w-[84px]' />
    </div>
  )
}
