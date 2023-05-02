import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';
import { Stack, Typography, Box } from '@mui/material';
import styles from './page.module.css';
import HomeBody from '@/components/HomeBody';
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className={styles.container}>
        <div className={styles.nextImage}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width={272}
            height={92}
            alt="Picture of the author"
          />
        </div>
        <HomeBody />
      </div>
    </>
  );
}
