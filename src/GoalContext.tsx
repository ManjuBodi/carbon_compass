// GoalContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { firestore, auth } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

interface GoalContextType {
  totalCredits: number;
  goal: number;
  progress: number;
  lastStrategy: string | null;
  setGoal: (goal: number) => void;
}

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export const GoalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [goal, setGoal] = useState<number>(1000);
  const [progress, setProgress] = useState<number>(0);
  const [lastStrategy, setLastStrategy] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalCreditsAndStrategy = async () => {
      const user = auth.currentUser;
      if (user && user.email) {
        const sanitizedEmail = user.email.replace(/[.+]/g, '_');
        const docRef = doc(firestore, 'carbonData', sanitizedEmail);
        const docSnap = await getDoc(docRef);

        const carbonCredits = docSnap.exists() ? docSnap.data().carbonCredits : 0;
        setTotalCredits(carbonCredits);

        const submissions = docSnap.exists() ? docSnap.data().submissions : [];
        if (submissions.length > 0) {
          const lastSubmission = submissions[submissions.length - 1];
          setLastStrategy(lastSubmission.strategy || null);
        } else {
          setLastStrategy(null);
        }

        if (goal > 0) {
          const calculatedProgress = (carbonCredits / goal) * 100;
          setProgress(calculatedProgress);
        } else {
          setProgress(0);
        }
      }
    };

    fetchTotalCreditsAndStrategy();
  }, [goal]);

  return (
    <GoalContext.Provider value={{ totalCredits, goal, progress, lastStrategy, setGoal }}>
      {children}
    </GoalContext.Provider>
  );
};

export const useGoalContext = () => {
  const context = useContext(GoalContext);
  if (context === undefined) {
    throw new Error('useGoalContext must be used within a GoalProvider');
  }
  return context;
};
