import React from 'react';

import GalleryPage from '../components/GalleryPage/GalleryPage';
import withLayout from '../layout';

const Gallery = () => (
  <>
    <GalleryPage />
  </>
);

const customProps = {
  localeKey: 'Gallery',
};

export default withLayout(customProps)(Gallery);
