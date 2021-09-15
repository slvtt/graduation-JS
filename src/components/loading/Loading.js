import React from 'react';
import ContentLoader from "react-content-loader";

function Loading(props) {
    return (
        <ContentLoader
            speed={2}
            width={800}
            height={808}
            viewBox="0 0 800 808"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="60" rx="2" ry="2" width="600" height="600" />
        </ContentLoader>
    );
}

export default Loading;