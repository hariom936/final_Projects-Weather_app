import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";

describe('Home', () => {
    
    it('should render properly', ()=>{
        render(<Home />);
        screen.getByRole("heading", {
            name: "Welcome to the Weather App"
            // name: /Weather App/i
        });
    });
    
});