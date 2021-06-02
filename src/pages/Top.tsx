import { VFC, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { fetchPupularData } from '../apis/index';

export const Top: VFC = () => {
  useEffect(() => {
    fetchPupularData().then((res: any) => {
      console.log(res);
    });
  }, []);

  return <Layout>TOP ページ</Layout>;
};
