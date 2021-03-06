import React from "react";
import {
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Radar,
  PolarGrid
} from "recharts";
import { skills } from "./data";

function Skills() {
  
  const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

  return (
    <section>
      <div className="title">
        <h2>Habilidades</h2>
      </div>
      <div>
        <article className="skill-center">
          <div>
            {
              //chart
            }
            <RadarChart
              cx="49%"
              innerRadius="10%"
              outerRadius="65%"
              width={width}
              height={400}
              margin={{ top: 0, right: 0, bottom: 5, left: 0 }}
              data={skills}
              fill="#223f99"
            >
              <PolarGrid />
              
              <PolarAngleAxis dataKey="subject" />
              
              <PolarRadiusAxis angle={78} domain={[0, 7]} />
              
              
              <Radar
                name="Habilidades"
                dataKey="nivel"
                stroke="#223f99"
                fill="#223f99"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
