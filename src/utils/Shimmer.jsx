import React from 'react';
import { ShimmerPostList } from 'react-shimmer-effects';

const Shimmer = () => {
  return (
    <>
      <ShimmerPostList postStyle="STYLE_ONE" col={3} row={16} gap={30} />
    </>
  );
};

export default Shimmer;
