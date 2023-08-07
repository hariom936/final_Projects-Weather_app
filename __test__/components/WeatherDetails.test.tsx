import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import WeatherDetails from "@/components/WeatherDetails";

let obj ={
    current: {
        wind_mph: 12,
        humidity: 12,
        wind_dir: "west",
        pressure_mb: 12,
        feelslike_f: 13,
        vis_km: 12,
      },
      forecast: {
        forecastday:[
          {
            astro: {
              sunrise: "west",
              sunset: "east",
            },
          }
        ]
      },
  }



describe('Currentt', () => {
    it('should render properly', () => {
        render(<WeatherDetails data={obj}/>);
        screen.getByRole("heading", {
           name: "Weather Details"
            // name:,/Weather App/i
        });
    });

    
});