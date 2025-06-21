// components/SectionHeader.tsx
'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

type SectionHeaderProps = {
  title: string;
  buttonLabel: string;
  onButtonClick?: () => void;
};

export const SectionHeader = ({
  title,
  buttonLabel,
  onButtonClick,
}: SectionHeaderProps) => {
  return (
    <div className="flex justify-between items-center align-middle">
      <SectionHeading className="mb-12">{title}</SectionHeading>
      <div className="mb-12">
        <Button
          variant="outline"
          className="hover:underline text-saloon-brown uppercase"
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
