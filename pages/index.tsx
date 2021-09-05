import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" width={200} height={200} alt="profile" />
      <h1>Home Page</h1>
    </Layout>
  );
}
