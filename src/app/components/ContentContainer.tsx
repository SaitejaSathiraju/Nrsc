import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div
        className="
          w-full
          max-w-5xl
          px-4
          py-6
          mt-4
          md:ml-48  // reduced margin-left to move content to the left
          transition-all
        "
      >
        {children}
      </div>
    </div>
  );
};

export default ContentContainer;
