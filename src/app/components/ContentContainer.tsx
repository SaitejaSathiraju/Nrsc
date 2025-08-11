import React, { ReactNode } from 'react';
import LeftSideContent from './LeftSideContent';

interface ContentContainerProps {
  children: ReactNode;
  showLeftContent?: boolean;
  pageType?: 'resources' | 'about' | 'data-products' | 'services' | 'applications' | 'default';
}

const ContentContainer: React.FC<ContentContainerProps> = ({ 
  children, 
  showLeftContent = false,
  pageType = 'default'
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-7xl px-4 py-6 mt-4">
        {/* Main Content */}
        <div
          className={`
            flex-1
            ${showLeftContent ? 'lg:mr-8' : 'md:ml-48'}
            transition-all
          `}
        >
          {children}
        </div>
        
        {/* Right Side Time Widget */}
        {showLeftContent && (
          <LeftSideContent pageType={pageType} />
        )}
      </div>
    </div>
  );
};

export default ContentContainer;
