import React, { createContext, useContext, useState } from 'react';

interface SubmissionContextType {
    submissionsUpdated: boolean;
    triggerUpdate: () => void;
}

const SubmissionContext = createContext<SubmissionContextType | undefined>(undefined);

export const SubmissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [submissionsUpdated, setSubmissionsUpdated] = useState(false);

    const triggerUpdate = () => {
        setSubmissionsUpdated(prev => !prev); // Toggle to trigger re-render
    };

    return (
        <SubmissionContext.Provider value={{ submissionsUpdated, triggerUpdate }}>
            {children}
        </SubmissionContext.Provider>
    );
};

export const useSubmissionContext = () => {
    const context = useContext(SubmissionContext);
    if (!context) {
        throw new Error('useSubmissionContext must be used within a SubmissionProvider');
    }
    return context;
};
