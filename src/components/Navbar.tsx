import Link from 'next/link'
import MaxWidthWrapper from './custom/MaxWidthWrapper'
import ConnectRoninWalletButton from './ConnectWallet'

const Navbar = async () => {
  return (
    <header className='fixed z-50 left-0 top-0 inset-x-0 backdrop-blur'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <h1 className='text-secondary'>Crypto</h1>
          <ConnectRoninWalletButton />
        </div>
      </MaxWidthWrapper>

    </header>
  )
}

export default Navbar