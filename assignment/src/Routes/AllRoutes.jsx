import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Private from "../Components/Private";
import Quiz from "../Components/Quiz";
import SignUP from "../Components/SignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Quiz />{" "}
            </Private>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
      </Routes>
    </div>
  );
};

export { AllRoutes };
