import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`<iron-iconset-svg size="48" name="mg-core">
  <svg viewBox="0 0 48 48" width="48" height="48">
    <rect xmlns="http://www.w3.org/2000/svg" fill="#E5E5E5"/>
    <defs>
      <g id="user--normal">
        <path d="M32.16 24.46C31.92 24.32 31.62 24.4 31.48 24.64C31.34 24.88 31.42 25.18 31.66 25.32C35.7 27.7 36.2 31.72 36.24 33.2C35.4 34 30.87 37.98 24.12 37.98C17.41 37.98 12.85 34 12 33.2C12.05 31.61 12.7 25.92 19.54 24.12C19.58 24.11 19.63 24.08 19.67 24.06C19.69 24.05 19.71 24.04 19.72 24.03H19.73C19.75 24.01 19.76 23.99 19.78 23.97C19.81 23.94 19.83 23.91 19.85 23.88C19.86 23.86 19.87 23.84 19.87 23.81C19.88 23.77 19.9 23.73 19.91 23.69C19.91 23.67 19.91 23.65 19.91 23.63C19.91 23.59 19.91 23.55 19.9 23.51C19.9 23.51 19.9 23.5 19.89 23.5C19.89 23.49 19.88 23.48 19.88 23.47C19.86 23.41 19.84 23.36 19.8 23.32C18.34 21.56 17.47 19.01 17.47 16.51C17.47 11.81 20.45 7.99 24.11 7.99C27.77 7.99 30.75 11.81 30.75 16.51C30.75 21.37 27.65 25.62 24.11 25.62C23.47 25.62 22.84 25.49 22.23 25.22C21.98 25.11 21.6799 25.22 21.5699 25.48C21.4599 25.73 21.57 26.03 21.83 26.14C22.57 26.46 23.34 26.63 24.11 26.63C28.25 26.63 31.75 22 31.75 16.52C31.75 11.27 28.32 7 24.11 7C19.9 7 16.47 11.27 16.47 16.52C16.47 19.02 17.24 21.48 18.59 23.38C13.02 25.16 11 29.67 11 33.42C11 33.55 11.05 33.67 11.14 33.77C11.35 33.98 16.26 39 24.13 39C32.02 39 36.91 33.99 37.12 33.77C37.21 33.68 37.26 33.55 37.26 33.42C37.23 32 36.86 27.23 32.16 24.46Z"/>
        <path d="M23.47 10.72C23.74 10.66 23.9 10.39 23.84 10.12C23.78 9.85003 23.51 9.68003 23.24 9.75003C20.78 10.33 19 13.2 19 16.58C19 17.73 19.21 18.9 19.61 19.96C19.69 20.16 19.88 20.28 20.08 20.28C20.14 20.28 20.2 20.27 20.26 20.25C20.52 20.15 20.65 19.87 20.55 19.61C20.19 18.66 20.01 17.61 20.01 16.58C20 13.7 21.49 11.19 23.47 10.72Z"/>
      </g>
      <g id="user--glow">
        <filter id="user-filter-glow" x="-0.5" y="-0.5" width="2" height="2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#user-filter-glow)" d="M32.16 24.46C31.92 24.32 31.62 24.4 31.48 24.64C31.34 24.88 31.42 25.18 31.66 25.32C35.7 27.7 36.2 31.72 36.24 33.2C35.4 34 30.87 37.98 24.12 37.98C17.41 37.98 12.85 34 12 33.2C12.05 31.61 12.7 25.92 19.54 24.12C19.58 24.11 19.63 24.08 19.67 24.06C19.69 24.05 19.71 24.04 19.72 24.03H19.73C19.75 24.01 19.76 23.99 19.78 23.97C19.81 23.94 19.83 23.91 19.85 23.88C19.86 23.86 19.87 23.84 19.87 23.81C19.88 23.77 19.9 23.73 19.91 23.69C19.91 23.67 19.91 23.65 19.91 23.63C19.91 23.59 19.91 23.55 19.9 23.51C19.9 23.51 19.9 23.5 19.89 23.5C19.89 23.49 19.88 23.48 19.88 23.47C19.86 23.41 19.84 23.36 19.8 23.32C18.34 21.56 17.47 19.01 17.47 16.51C17.47 11.81 20.45 7.99 24.11 7.99C27.77 7.99 30.75 11.81 30.75 16.51C30.75 21.37 27.65 25.62 24.11 25.62C23.47 25.62 22.84 25.49 22.23 25.22C21.98 25.11 21.6799 25.22 21.5699 25.48C21.4599 25.73 21.57 26.03 21.83 26.14C22.57 26.46 23.34 26.63 24.11 26.63C28.25 26.63 31.75 22 31.75 16.52C31.75 11.27 28.32 7 24.11 7C19.9 7 16.47 11.27 16.47 16.52C16.47 19.02 17.24 21.48 18.59 23.38C13.02 25.16 11 29.67 11 33.42C11 33.55 11.05 33.67 11.14 33.77C11.35 33.98 16.26 39 24.13 39C32.02 39 36.91 33.99 37.12 33.77C37.21 33.68 37.26 33.55 37.26 33.42C37.23 32 36.86 27.23 32.16 24.46Z"/>
        <path filter="url(#user-filter-glow)" d="M23.47 10.72C23.74 10.66 23.9 10.39 23.84 10.12C23.78 9.85003 23.51 9.68003 23.24 9.75003C20.78 10.33 19 13.2 19 16.58C19 17.73 19.21 18.9 19.61 19.96C19.69 20.16 19.88 20.28 20.08 20.28C20.14 20.28 20.2 20.27 20.26 20.25C20.52 20.15 20.65 19.87 20.55 19.61C20.19 18.66 20.01 17.61 20.01 16.58C20 13.7 21.49 11.19 23.47 10.72Z"/>
        <path d="M32.16 24.46C31.92 24.32 31.62 24.4 31.48 24.64C31.34 24.88 31.42 25.18 31.66 25.32C35.7 27.7 36.2 31.72 36.24 33.2C35.4 34 30.87 37.98 24.12 37.98C17.41 37.98 12.85 34 12 33.2C12.05 31.61 12.7 25.92 19.54 24.12C19.58 24.11 19.63 24.08 19.67 24.06C19.69 24.05 19.71 24.04 19.72 24.03H19.73C19.75 24.01 19.76 23.99 19.78 23.97C19.81 23.94 19.83 23.91 19.85 23.88C19.86 23.86 19.87 23.84 19.87 23.81C19.88 23.77 19.9 23.73 19.91 23.69C19.91 23.67 19.91 23.65 19.91 23.63C19.91 23.59 19.91 23.55 19.9 23.51C19.9 23.51 19.9 23.5 19.89 23.5C19.89 23.49 19.88 23.48 19.88 23.47C19.86 23.41 19.84 23.36 19.8 23.32C18.34 21.56 17.47 19.01 17.47 16.51C17.47 11.81 20.45 7.99 24.11 7.99C27.77 7.99 30.75 11.81 30.75 16.51C30.75 21.37 27.65 25.62 24.11 25.62C23.47 25.62 22.84 25.49 22.23 25.22C21.98 25.11 21.6799 25.22 21.5699 25.48C21.4599 25.73 21.57 26.03 21.83 26.14C22.57 26.46 23.34 26.63 24.11 26.63C28.25 26.63 31.75 22 31.75 16.52C31.75 11.27 28.32 7 24.11 7C19.9 7 16.47 11.27 16.47 16.52C16.47 19.02 17.24 21.48 18.59 23.38C13.02 25.16 11 29.67 11 33.42C11 33.55 11.05 33.67 11.14 33.77C11.35 33.98 16.26 39 24.13 39C32.02 39 36.91 33.99 37.12 33.77C37.21 33.68 37.26 33.55 37.26 33.42C37.23 32 36.86 27.23 32.16 24.46Z"/>
        <path d="M23.47 10.72C23.74 10.66 23.9 10.39 23.84 10.12C23.78 9.85003 23.51 9.68003 23.24 9.75003C20.78 10.33 19 13.2 19 16.58C19 17.73 19.21 18.9 19.61 19.96C19.69 20.16 19.88 20.28 20.08 20.28C20.14 20.28 20.2 20.27 20.26 20.25C20.52 20.15 20.65 19.87 20.55 19.61C20.19 18.66 20.01 17.61 20.01 16.58C20 13.7 21.49 11.19 23.47 10.72Z"/>
      </g>

      <g id="bell--normal">
        <path d="M11.5 32.13H37.4501C37.7301 32.13 37.9501 31.91 37.9501 31.63C37.9501 31.35 37.7301 31.13 37.4501 31.13H11.5C10.67 31.13 10 31.8 10 32.63V33.44C10 34.27 10.67 34.94 11.5 34.94H37.4501C37.7301 34.94 37.9501 34.72 37.9501 34.44C37.9501 34.16 37.7301 33.94 37.4501 33.94H11.5C11.22 33.94 11 33.71 11 33.44V32.63C10.99 32.35 11.22 32.13 11.5 32.13Z"/>
        <path d="M13.4301 20.99V29.11C13.4301 29.39 13.6501 29.61 13.9301 29.61C14.2101 29.61 14.4301 29.39 14.4301 29.11V20.99C14.4301 15.73 18.7101 11.45 23.9701 11.45C25.6401 11.45 27.2901 11.89 28.7301 12.72C28.9701 12.86 29.28 12.78 29.41 12.54C29.55 12.3 29.4701 12 29.2301 11.86C27.6401 10.94 25.8201 10.45 23.9701 10.45C18.1601 10.45 13.4301 15.18 13.4301 20.99Z"/>
        <path d="M26.3 36.67C26.02 36.67 25.8 36.89 25.8 37.17C25.8 38.18 24.9801 39 23.9701 39C23.6501 39 23.3301 38.92 23.0601 38.76C22.6001 38.5 22.2801 38.05 22.1801 37.53C22.1601 37.41 22.15 37.29 22.15 37.17C22.15 36.89 21.93 36.67 21.65 36.67C21.37 36.67 21.15 36.89 21.15 37.17C21.15 37.36 21.1701 37.55 21.2001 37.72C21.3601 38.52 21.8601 39.21 22.5601 39.62C22.9901 39.87 23.4801 40 23.9701 40C25.5301 40 26.8 38.73 26.8 37.17C26.8 36.9 26.57 36.67 26.3 36.67Z"/>
        <path d="M25.9 9C26.18 9 26.4 8.78 26.4 8.5C26.4 8.22 26.18 8 25.9 8H22.03C21.75 8 21.53 8.22 21.53 8.5C21.53 8.78 21.75 9 22.03 9H25.9Z"/>
        <path d="M16.16 20.77C16.15 20.8 16.14 20.84 16.14 20.87V23.41C16.14 23.69 16.36 23.91 16.64 23.91C16.92 23.91 17.14 23.69 17.14 23.41V21.2C17.14 17.35 20.15 14.19 23.99 14C24.27 13.99 24.4801 13.75 24.4601 13.48C24.4501 13.2 24.2001 12.97 23.9401 13.01C19.7201 13.21 16.38 16.59 16.16 20.77Z"/>
        <path d="M34.19 29.11C34.19 29.39 34.41 29.61 34.69 29.61C34.97 29.61 35.19 29.39 35.19 29.11V21.48C35.19 20.92 35.15 20.36 35.07 19.82C35.03 19.55 34.77 19.36 34.5 19.4C34.23 19.44 34.04 19.69 34.08 19.97C34.15 20.47 34.19 20.98 34.19 21.49V29.11Z"/>
      </g>
      <g id="bell--glow">
        <filter id="bell-filter-glow" x="-10" y="-10" width="20" height="20">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#bell-filter-glow)" d="M11.5 32.13H37.4501C37.7301 32.13 37.9501 31.91 37.9501 31.63C37.9501 31.35 37.7301 31.13 37.4501 31.13H11.5C10.67 31.13 10 31.8 10 32.63V33.44C10 34.27 10.67 34.94 11.5 34.94H37.4501C37.7301 34.94 37.9501 34.72 37.9501 34.44C37.9501 34.16 37.7301 33.94 37.4501 33.94H11.5C11.22 33.94 11 33.71 11 33.44V32.63C10.99 32.35 11.22 32.13 11.5 32.13Z"/>
        <path filter="url(#bell-filter-glow)" d="M13.4301 20.99V29.11C13.4301 29.39 13.6501 29.61 13.9301 29.61C14.2101 29.61 14.4301 29.39 14.4301 29.11V20.99C14.4301 15.73 18.7101 11.45 23.9701 11.45C25.6401 11.45 27.2901 11.89 28.7301 12.72C28.9701 12.86 29.28 12.78 29.41 12.54C29.55 12.3 29.4701 12 29.2301 11.86C27.6401 10.94 25.8201 10.45 23.9701 10.45C18.1601 10.45 13.4301 15.18 13.4301 20.99Z"/>
        <path filter="url(#bell-filter-glow)" d="M26.3 36.67C26.02 36.67 25.8 36.89 25.8 37.17C25.8 38.18 24.9801 39 23.9701 39C23.6501 39 23.3301 38.92 23.0601 38.76C22.6001 38.5 22.2801 38.05 22.1801 37.53C22.1601 37.41 22.15 37.29 22.15 37.17C22.15 36.89 21.93 36.67 21.65 36.67C21.37 36.67 21.15 36.89 21.15 37.17C21.15 37.36 21.1701 37.55 21.2001 37.72C21.3601 38.52 21.8601 39.21 22.5601 39.62C22.9901 39.87 23.4801 40 23.9701 40C25.5301 40 26.8 38.73 26.8 37.17C26.8 36.9 26.57 36.67 26.3 36.67Z"/>
        <path filter="url(#bell-filter-glow)" d="M25.9 9C26.18 9 26.4 8.78 26.4 8.5C26.4 8.22 26.18 8 25.9 8H22.03C21.75 8 21.53 8.22 21.53 8.5C21.53 8.78 21.75 9 22.03 9H25.9Z"/>
        <path filter="url(#bell-filter-glow)" d="M16.16 20.77C16.15 20.8 16.14 20.84 16.14 20.87V23.41C16.14 23.69 16.36 23.91 16.64 23.91C16.92 23.91 17.14 23.69 17.14 23.41V21.2C17.14 17.35 20.15 14.19 23.99 14C24.27 13.99 24.4801 13.75 24.4601 13.48C24.4501 13.2 24.2001 12.97 23.9401 13.01C19.7201 13.21 16.38 16.59 16.16 20.77Z"/>
        <path filter="url(#bell-filter-glow)" d="M34.19 29.11C34.19 29.39 34.41 29.61 34.69 29.61C34.97 29.61 35.19 29.39 35.19 29.11V21.48C35.19 20.92 35.15 20.36 35.07 19.82C35.03 19.55 34.77 19.36 34.5 19.4C34.23 19.44 34.04 19.69 34.08 19.97C34.15 20.47 34.19 20.98 34.19 21.49V29.11Z"/>
        <path d="M11.5 32.13H37.4501C37.7301 32.13 37.9501 31.91 37.9501 31.63C37.9501 31.35 37.7301 31.13 37.4501 31.13H11.5C10.67 31.13 10 31.8 10 32.63V33.44C10 34.27 10.67 34.94 11.5 34.94H37.4501C37.7301 34.94 37.9501 34.72 37.9501 34.44C37.9501 34.16 37.7301 33.94 37.4501 33.94H11.5C11.22 33.94 11 33.71 11 33.44V32.63C10.99 32.35 11.22 32.13 11.5 32.13Z"/>
        <path d="M13.4301 20.99V29.11C13.4301 29.39 13.6501 29.61 13.9301 29.61C14.2101 29.61 14.4301 29.39 14.4301 29.11V20.99C14.4301 15.73 18.7101 11.45 23.9701 11.45C25.6401 11.45 27.2901 11.89 28.7301 12.72C28.9701 12.86 29.28 12.78 29.41 12.54C29.55 12.3 29.4701 12 29.2301 11.86C27.6401 10.94 25.8201 10.45 23.9701 10.45C18.1601 10.45 13.4301 15.18 13.4301 20.99Z"/>
        <path d="M26.3 36.67C26.02 36.67 25.8 36.89 25.8 37.17C25.8 38.18 24.9801 39 23.9701 39C23.6501 39 23.3301 38.92 23.0601 38.76C22.6001 38.5 22.2801 38.05 22.1801 37.53C22.1601 37.41 22.15 37.29 22.15 37.17C22.15 36.89 21.93 36.67 21.65 36.67C21.37 36.67 21.15 36.89 21.15 37.17C21.15 37.36 21.1701 37.55 21.2001 37.72C21.3601 38.52 21.8601 39.21 22.5601 39.62C22.9901 39.87 23.4801 40 23.9701 40C25.5301 40 26.8 38.73 26.8 37.17C26.8 36.9 26.57 36.67 26.3 36.67Z"/>
        <path d="M25.9 9C26.18 9 26.4 8.78 26.4 8.5C26.4 8.22 26.18 8 25.9 8H22.03C21.75 8 21.53 8.22 21.53 8.5C21.53 8.78 21.75 9 22.03 9H25.9Z"/>
        <path d="M16.16 20.77C16.15 20.8 16.14 20.84 16.14 20.87V23.41C16.14 23.69 16.36 23.91 16.64 23.91C16.92 23.91 17.14 23.69 17.14 23.41V21.2C17.14 17.35 20.15 14.19 23.99 14C24.27 13.99 24.4801 13.75 24.4601 13.48C24.4501 13.2 24.2001 12.97 23.9401 13.01C19.7201 13.21 16.38 16.59 16.16 20.77Z"/>
        <path d="M34.19 29.11C34.19 29.39 34.41 29.61 34.69 29.61C34.97 29.61 35.19 29.39 35.19 29.11V21.48C35.19 20.92 35.15 20.36 35.07 19.82C35.03 19.55 34.77 19.36 34.5 19.4C34.23 19.44 34.04 19.69 34.08 19.97C34.15 20.47 34.19 20.98 34.19 21.49V29.11Z"/>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);