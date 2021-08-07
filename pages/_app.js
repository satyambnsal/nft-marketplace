import '../styles/globals.css';
import Link from 'next/link';
import { MATIC_FAUCET_URL, POLYGON_SCAN_MUMABI_URL } from '../config';

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">Sell Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">My Digital Assets</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">Creator Dashboard</a>
          </Link>
        </div>
        {/* <div>
          <Link href="/">Check transaction status</Link>
          <Link>Get test ethers</Link>
        </div> */}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default Marketplace;
