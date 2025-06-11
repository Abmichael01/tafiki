// components/ForgotPassword/ForgotPassword.tsx
import Stage1 from "@/components/Auth/ForgotPassword/Stage1";
import Stage2 from "@/components/Auth/ForgotPassword/Stage2";
import Stage3 from "@/components/Auth/ForgotPassword/Stage3";
import React from "react";
import { useSearchParams } from "react-router-dom";


const ForgotPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const stage = searchParams.get('stage') || '1';

  const renderCurrentStage = () => {
    switch (stage) {
      case '2':
        return <Stage2 />;
      case '3':
        return <Stage3 />;
      case '1':
      default:
        return <Stage1 />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {renderCurrentStage()}
    </div>
  );
};

export default ForgotPassword;