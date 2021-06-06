import { VFC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { VideoDetail } from '../components/VideoDetail/VideoDetail';

export const Watch: VFC = () => {
  return (
    <Layout>
      <VideoDetail />
    </Layout>
  );
};
