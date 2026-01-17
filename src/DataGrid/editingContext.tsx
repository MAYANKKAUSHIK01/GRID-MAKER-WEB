
import React, { createContext, useContext } from 'react';

export type EditingCell = { rowId: string; columnId: string } | null;

type Ctx = {
  editing: EditingCell;
  setEditing: React.Dispatch<React.SetStateAction<EditingCell>>;
};

const EditingContext = createContext<Ctx | null>(null);

export function useEditing() {
  const ctx = useContext(EditingContext);
  if (!ctx) throw new Error('useEditing must be inside provider');
  return ctx;
}

export const EditingProvider = EditingContext.Provider;
