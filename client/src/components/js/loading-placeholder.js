import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonPlaceholder = ({ count, circle, height, width }) => {

  
    return (
        <>
            {circle && <Skeleton circle={true} height={height} width={width} style={{ marginBottom: '20px' }} />}
            {!circle && <Skeleton height={height} style={{ marginBottom: '10px' }} />}
            <Skeleton count={count || 1} />
        </>
    );
};

export default SkeletonPlaceholder;
