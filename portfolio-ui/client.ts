import {createClient} from '@sanity/client';

export default createClient({
  projectId: 'y0e32ahg',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true,
});
