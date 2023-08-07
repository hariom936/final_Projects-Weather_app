import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Current from "@/components/Current";
let obj =  {
    current: {
      condition: {
        icon: "/icon-192x192.png",
        text: "text",
      },
      temp_f: 25,
    },
    location: {
      name: "GGN",
      region: "IND",
    },
  };
describe('Currentt', () => {
    it('should render properly', () => {
        render(<Current data={obj}/>);
        screen.getByRole("heading", {
           name: "Today"
            // name:,/Weather App/i
        });
    });

    
});