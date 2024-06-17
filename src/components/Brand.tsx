import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from 'rsuite';

const Brand = (props) => {
  return (
    <Stack className="brand" {...props}>
      <Link to="/home">
        <span style={{ marginLeft: 14 }}>POS Back Office</span>
      </Link>
    </Stack>
  );
};

export default Brand;
