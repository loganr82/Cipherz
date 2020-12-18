import React from "react";
import { SvgXml } from "react-native-svg";

export function DecipherSvg() {
  const decipher = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.525 11.175C44.325 11.175 44.125 11.125 43.95 11.025C39.15 8.55 35 7.5 30.025 7.5C25.075 7.5 20.375 8.675 16.1 11.025C15.5 11.35 14.75 11.125 14.4 10.525C14.075 9.925 14.3 9.15 14.9 8.825C19.55 6.3 24.65 5 30.025 5C35.35 5 40 6.175 45.1 8.8C45.725 9.125 45.95 9.875 45.625 10.475C45.4 10.925 44.975 11.175 44.525 11.175ZM8.75 24.3C8.5 24.3 8.25 24.225 8.025 24.075C7.45 23.675 7.325 22.9 7.725 22.325C10.2 18.825 13.35 16.075 17.1 14.15C24.95 10.1 35 10.075 42.875 14.125C46.625 16.05 49.775 18.775 52.25 22.25C52.65 22.8 52.525 23.6 51.95 24C51.375 24.4 50.6 24.275 50.2 23.7C47.95 20.55 45.1 18.075 41.725 16.35C34.55 12.675 25.375 12.675 18.225 16.375C14.825 18.125 11.975 20.625 9.725 23.775C9.525 24.125 9.15 24.3 8.75 24.3ZM24.375 54.475C24.05 54.475 23.725 54.35 23.5 54.1C21.325 51.925 20.15 50.525 18.475 47.5C16.75 44.425 15.85 40.675 15.85 36.65C15.85 29.225 22.2 23.175 30 23.175C37.8 23.175 44.15 29.225 44.15 36.65C44.15 37.35 43.6 37.9 42.9 37.9C42.2 37.9 41.65 37.35 41.65 36.65C41.65 30.6 36.425 25.675 30 25.675C23.575 25.675 18.35 30.6 18.35 36.65C18.35 40.25 19.15 43.575 20.675 46.275C22.275 49.15 23.375 50.375 25.3 52.325C25.775 52.825 25.775 53.6 25.3 54.1C25.025 54.35 24.7 54.475 24.375 54.475ZM42.3 49.85C39.325 49.85 36.7 49.1 34.55 47.625C30.825 45.1 28.6 41 28.6 36.65C28.6 35.95 29.15 35.4 29.85 35.4C30.55 35.4 31.1 35.95 31.1 36.65C31.1 40.175 32.9 43.5 35.95 45.55C37.725 46.75 39.8 47.325 42.3 47.325C42.9 47.325 43.9 47.25 44.9 47.075C45.575 46.95 46.225 47.4 46.35 48.1C46.475 48.775 46.025 49.425 45.325 49.55C43.9 49.825 42.65 49.85 42.3 49.85ZM37.275 55C37.175 55 37.05 54.975 36.95 54.95C32.975 53.85 30.375 52.375 27.65 49.7C24.15 46.225 22.225 41.6 22.225 36.65C22.225 32.6 25.675 29.3 29.925 29.3C34.175 29.3 37.625 32.6 37.625 36.65C37.625 39.325 39.95 41.5 42.825 41.5C45.7 41.5 48.025 39.325 48.025 36.65C48.025 27.225 39.9 19.575 29.9 19.575C22.8 19.575 16.3 23.525 13.375 29.65C12.4 31.675 11.9 34.05 11.9 36.65C11.9 38.6 12.075 41.675 13.575 45.675C13.825 46.325 13.5 47.05 12.85 47.275C12.2 47.525 11.475 47.175 11.25 46.55C10.025 43.275 9.425 40.025 9.425 36.65C9.425 33.65 10 30.925 11.125 28.55C14.45 21.575 21.825 17.05 29.9 17.05C41.275 17.05 50.525 25.825 50.525 36.625C50.525 40.675 47.075 43.975 42.825 43.975C38.575 43.975 35.125 40.675 35.125 36.625C35.125 33.95 32.8 31.775 29.925 31.775C27.05 31.775 24.725 33.95 24.725 36.625C24.725 40.9 26.375 44.9 29.4 47.9C31.775 50.25 34.05 51.55 37.575 52.525C38.25 52.7 38.625 53.4 38.45 54.05C38.325 54.625 37.8 55 37.275 55Z" fill="black"/>
      </svg>
      `;

  const DecipherSvg = () => <SvgXml xml={decipher} width="50%" height="50%" />;

  return <DecipherSvg />;
}
export function LearnSvg() {
  const learn = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M35.5 14L28 6.5L8 26.5V34H15.5L35.5 14ZM41.42 8.08C42.2 7.3 42.2 6.04 41.42 5.26L36.74 0.580003C35.96 -0.199997 34.7 -0.199997 33.92 0.580003L30 4.5L37.5 12L41.42 8.08Z" fill="black"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="48" height="48" fill="white"/>
  </clipPath>
  </defs>
  </svg>

      `;

  const LearnSvg = () => <SvgXml xml={learn} width="60%" height="60%" />;

  return <LearnSvg />;
}

export function DocSvg() {
  const docs = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 12H24L20 8H8C5.8 8 4.02 9.8 4.02 12L4 36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V16C44 13.8 42.2 12 40 12ZM40 36H8V16H40V36Z" fill="black"/>
  </svg>
  `;

  const DocSvg = () => <SvgXml xml={docs} width="50%" height="60%" />;

  return <DocSvg />;
}

export function QuarterSvg() {
  const quarter = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16H16V2Z" fill="#D3E5FF"/>
  <circle cx="16" cy="16" r="5" fill="black"/>
  <rect x="16" y="14" width="7" height="16" fill="black"/>
  <rect x="21" y="14" width="6" height="6" fill="black"/>
  <rect x="22" y="24" width="1" height="5" fill="black"/>
  <rect x="23" y="23" width="1" height="5" fill="black"/>
  <rect x="24" y="23" width="1" height="5" fill="black"/>
  <rect x="23" y="19" width="4" height="8" fill="black"/>
  <rect x="26" y="15" width="4" height="8" fill="black"/>
  <rect x="27" y="20" width="2" height="5" fill="black"/>
  <rect x="23" y="24" width="1" height="5" fill="black"/>
  <rect x="2" y="15" width="12" height="7" fill="black"/>
  <rect x="3" y="17" width="12" height="7" fill="black"/>
  <rect x="4" y="18" width="12" height="7" fill="black"/>
  <rect x="5" y="20" width="12" height="7" fill="black"/>
  <rect x="7" y="21" width="12" height="7" fill="black"/>
  <rect x="8" y="22" width="12" height="7" fill="black"/>
  <rect x="10" y="23" width="12" height="7" fill="black"/>
  </svg>
  
      `;

  const QuarterSvg = () => <SvgXml xml={decipher} width="50%" height="50%" />;

  return <QuarterSvg />;
}

export function DoubleQuarterSvg() {
  const doublequarter = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16H16V2Z" fill="#D3E5FF"/>
  <circle cx="16" cy="16" r="5" fill="black"/>
  <rect x="16" y="14" width="7" height="16" fill="black"/>
  <rect x="21" y="14" width="6" height="6" fill="black"/>
  <rect x="22" y="24" width="1" height="5" fill="black"/>
  <rect x="23" y="23" width="1" height="5" fill="black"/>
  <rect x="24" y="23" width="1" height="5" fill="black"/>
  <rect x="23" y="19" width="4" height="8" fill="black"/>
  <rect x="26" y="15" width="4" height="8" fill="black"/>
  <rect x="27" y="20" width="2" height="5" fill="black"/>
  <rect x="23" y="24" width="1" height="5" fill="black"/>
  </svg>
  
      `;

  const DoubleQuarterSvg = () => (
    <SvgXml xml={decipher} width="50%" height="50%" />
  );

  return <DoubleQuarterSvg />;
}

export function TripleQuarterSvg() {
  const triplequarter = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16H16V2Z" fill="#D3E5FF"/>
  <circle cx="16" cy="16" r="5" fill="black"/>
  </svg>
  
  
      `;

  const TripleQuarterSvg = () => (
    <SvgXml xml={decipher} width="50%" height="50%" />
  );

  return <TripleQuarterSvg />;
}

export function QuadrupleQuarterSvg() {
  const quadruplequarter = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="black"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16H16V2Z" fill="#D3E5FF"/>
  <circle cx="16" cy="16" r="14" fill="#D3E5FF"/>
  <circle cx="16" cy="16" r="5" fill="black"/>
  </svg>
  
  
  
      `;

  const QuadrupleQuarterSvg = () => (
    <SvgXml xml={decipher} width="50%" height="50%" />
  );

  return <QuadrupleQuarterSvg />;
}
