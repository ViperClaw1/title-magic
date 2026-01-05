import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TitleResult {
  original: string;
  suggestions: string[];
  timestamp: Date;
}

interface TitleContextType {
  result: TitleResult | null;
  setResult: (result: TitleResult | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<TitleResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TitleContext.Provider value={{ result, setResult, isLoading, setIsLoading }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitleContext = () => {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitleContext must be used within a TitleProvider');
  }
  return context;
};
