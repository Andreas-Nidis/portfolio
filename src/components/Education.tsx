import React from "react";
import styled from "styled-components";

const EducationWrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #1abc9c;
  display: inline-block;
`;

const Degree = styled.div`
  margin-bottom: 1.5rem;
`;

const School = styled.h3`
  margin: 0;
`;

const Details = styled.p`
  margin: 0.2rem 0 0 0;
`;

const Education: React.FC = () => {
  return (
    <EducationWrapper>
      <Title>Education</Title>

      <Degree>
        <School>Vrije Universiteit Amsterdam</School>
        <Details>Bachelor’s in Philosophy, Minor in Economics</Details>
        <Details>2017 – 2020</Details>
      </Degree>

      <Degree>
        <School>Codecademy Certifications</School>
        <Details>React, TypeScript, Full-Stack Development</Details>
      </Degree>

    </EducationWrapper>
  );
};

export default Education;
