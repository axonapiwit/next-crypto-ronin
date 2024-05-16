'use client'

import { useState } from 'react'
import { WalletSDK } from '@roninnetwork/wallet-sdk'
import { SiweMessage } from "siwe"
import { Button } from './ui/button'

function ConnectRoninWalletButton(props: any) {
  const [userAddress, setUserAddress] = useState<string[]>()

  function checkRoninInstalled() {
    if ('ronin' in window) {
      return true
    }

    window.open('https://wallet.roninchain.com', '_blank')
    return false
  }

  async function connectRoninWallet(props: any) {
    const sdk = new WalletSDK()
    await sdk.connectInjected()

    const isInstalled = checkRoninInstalled()
    if (isInstalled === false) {
      return;
    }

    const accounts = await sdk.requestAccounts()
    if (accounts) {
      setUserAddress(accounts)
    }
  }

  function formatAddress(address: string): string {
    // Assuming address is at least 12 characters long
    if (address.length < 12) {
      return address
    }
    return `${address.slice(0, 3)}x${address.slice(3, 6)}...${address.slice(-4)}xd`
  }

  if (userAddress === undefined) {
    return <Button onClick={connectRoninWallet}>Connect Ronin Wallet</Button>
  }

  if (userAddress) {
    return `🎉 address: ${formatAddress(userAddress[0])}`
  }

}

export default ConnectRoninWalletButton