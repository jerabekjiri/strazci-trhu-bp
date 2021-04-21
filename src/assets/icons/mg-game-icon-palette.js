import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`<iron-iconset-svg size="48" name="mg-game">
  <svg viewBox="0 0 48 48" width="48" height="48">
    <rect xmlns="http://www.w3.org/2000/svg" fill="#E5E5E5"/>
    <defs>
      <g id="level--normal">
        <path d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.49 12.88 15.71 12.72C18.13 10.94 20.99 10 24 10C31.72 10 38 16.28 38 24C38 31.72 31.72 38 24 38C16.28 38 10 31.72 10 24C10 21.02 10.92 18.18 12.67 15.78C12.83 15.56 12.78 15.24 12.56 15.08C12.34 14.92 12.02 14.97 11.86 15.19C9.99 17.76 9 20.81 9 24C9 32.27 15.73 39 24 39C32.27 39 39 32.27 39 24C39 15.73 32.27 9 24 9Z"/>
        <path d="M32.5 23.43C32.92 23.02 33.07 22.42 32.89 21.86C32.71 21.3 32.24 20.9 31.65 20.82L27.59 20.23C27.42 20.21 27.27 20.1 27.19 19.94L25.37 16.26C25.11 15.73 24.59 15.4 24 15.4C23.41 15.4 22.89 15.73 22.63 16.25L20.81 19.94C20.73 20.1 20.58 20.21 20.41 20.23L16.35 20.82C15.77 20.9 15.3 21.3 15.11 21.86C14.93 22.42 15.08 23.02 15.5 23.43L18.44 26.3C18.57 26.42 18.62 26.6 18.59 26.77L17.9 30.81C17.8 31.39 18.03 31.96 18.51 32.31C18.78 32.51 19.09 32.6 19.41 32.6C19.65 32.6 19.9 32.54 20.12 32.42L23.76 30.51C23.91 30.43 24.1 30.43 24.25 30.51L27.88 32.42C28.4 32.69 29.02 32.65 29.49 32.3C29.96 31.96 30.2 31.38 30.1 30.8L29.41 26.75C29.38 26.58 29.44 26.4 29.56 26.28L32.5 23.43ZM28.42 26.93L29.11 30.98C29.14 31.18 29.07 31.38 28.9 31.5C28.73 31.62 28.52 31.64 28.34 31.54L24.71 29.63C24.26 29.4 23.73 29.4 23.29 29.63L19.65 31.54C19.47 31.64 19.26 31.62 19.09 31.5C18.92 31.38 18.84 31.18 18.88 30.98L19.57 26.93C19.65 26.43 19.49 25.93 19.13 25.58L16.2 22.71C16.05 22.57 16 22.36 16.07 22.17C16.13 21.97 16.29 21.84 16.5 21.81L20.56 21.22C21.06 21.15 21.49 20.84 21.71 20.38L23.53 16.7C23.62 16.51 23.8 16.4 24.01 16.4C24.22 16.4 24.39 16.51 24.49 16.7L26.31 20.38C26.53 20.83 26.96 21.15 27.46 21.22L31.52 21.81C31.72 21.84 31.88 21.98 31.95 22.17C32.01 22.37 31.96 22.57 31.82 22.71L28.88 25.58C28.5 25.93 28.34 26.44 28.42 26.93Z"/>
      </g>
      <g id="level--glow">
        <filter id="level-filter-glow" x="-0.5" y="-0.5" width="2" height="2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#level-filter-glow)" d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.49 12.88 15.71 12.72C18.13 10.94 20.99 10 24 10C31.72 10 38 16.28 38 24C38 31.72 31.72 38 24 38C16.28 38 10 31.72 10 24C10 21.02 10.92 18.18 12.67 15.78C12.83 15.56 12.78 15.24 12.56 15.08C12.34 14.92 12.02 14.97 11.86 15.19C9.99 17.76 9 20.81 9 24C9 32.27 15.73 39 24 39C32.27 39 39 32.27 39 24C39 15.73 32.27 9 24 9Z"/>
        <path filter="url(#level-filter-glow)" d="M32.5 23.43C32.92 23.02 33.07 22.42 32.89 21.86C32.71 21.3 32.24 20.9 31.65 20.82L27.59 20.23C27.42 20.21 27.27 20.1 27.19 19.94L25.37 16.26C25.11 15.73 24.59 15.4 24 15.4C23.41 15.4 22.89 15.73 22.63 16.25L20.81 19.94C20.73 20.1 20.58 20.21 20.41 20.23L16.35 20.82C15.77 20.9 15.3 21.3 15.11 21.86C14.93 22.42 15.08 23.02 15.5 23.43L18.44 26.3C18.57 26.42 18.62 26.6 18.59 26.77L17.9 30.81C17.8 31.39 18.03 31.96 18.51 32.31C18.78 32.51 19.09 32.6 19.41 32.6C19.65 32.6 19.9 32.54 20.12 32.42L23.76 30.51C23.91 30.43 24.1 30.43 24.25 30.51L27.88 32.42C28.4 32.69 29.02 32.65 29.49 32.3C29.96 31.96 30.2 31.38 30.1 30.8L29.41 26.75C29.38 26.58 29.44 26.4 29.56 26.28L32.5 23.43ZM28.42 26.93L29.11 30.98C29.14 31.18 29.07 31.38 28.9 31.5C28.73 31.62 28.52 31.64 28.34 31.54L24.71 29.63C24.26 29.4 23.73 29.4 23.29 29.63L19.65 31.54C19.47 31.64 19.26 31.62 19.09 31.5C18.92 31.38 18.84 31.18 18.88 30.98L19.57 26.93C19.65 26.43 19.49 25.93 19.13 25.58L16.2 22.71C16.05 22.57 16 22.36 16.07 22.17C16.13 21.97 16.29 21.84 16.5 21.81L20.56 21.22C21.06 21.15 21.49 20.84 21.71 20.38L23.53 16.7C23.62 16.51 23.8 16.4 24.01 16.4C24.22 16.4 24.39 16.51 24.49 16.7L26.31 20.38C26.53 20.83 26.96 21.15 27.46 21.22L31.52 21.81C31.72 21.84 31.88 21.98 31.95 22.17C32.01 22.37 31.96 22.57 31.82 22.71L28.88 25.58C28.5 25.93 28.34 26.44 28.42 26.93Z"/>
        <path d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.49 12.88 15.71 12.72C18.13 10.94 20.99 10 24 10C31.72 10 38 16.28 38 24C38 31.72 31.72 38 24 38C16.28 38 10 31.72 10 24C10 21.02 10.92 18.18 12.67 15.78C12.83 15.56 12.78 15.24 12.56 15.08C12.34 14.92 12.02 14.97 11.86 15.19C9.99 17.76 9 20.81 9 24C9 32.27 15.73 39 24 39C32.27 39 39 32.27 39 24C39 15.73 32.27 9 24 9Z"/>
        <path d="M32.5 23.43C32.92 23.02 33.07 22.42 32.89 21.86C32.71 21.3 32.24 20.9 31.65 20.82L27.59 20.23C27.42 20.21 27.27 20.1 27.19 19.94L25.37 16.26C25.11 15.73 24.59 15.4 24 15.4C23.41 15.4 22.89 15.73 22.63 16.25L20.81 19.94C20.73 20.1 20.58 20.21 20.41 20.23L16.35 20.82C15.77 20.9 15.3 21.3 15.11 21.86C14.93 22.42 15.08 23.02 15.5 23.43L18.44 26.3C18.57 26.42 18.62 26.6 18.59 26.77L17.9 30.81C17.8 31.39 18.03 31.96 18.51 32.31C18.78 32.51 19.09 32.6 19.41 32.6C19.65 32.6 19.9 32.54 20.12 32.42L23.76 30.51C23.91 30.43 24.1 30.43 24.25 30.51L27.88 32.42C28.4 32.69 29.02 32.65 29.49 32.3C29.96 31.96 30.2 31.38 30.1 30.8L29.41 26.75C29.38 26.58 29.44 26.4 29.56 26.28L32.5 23.43ZM28.42 26.93L29.11 30.98C29.14 31.18 29.07 31.38 28.9 31.5C28.73 31.62 28.52 31.64 28.34 31.54L24.71 29.63C24.26 29.4 23.73 29.4 23.29 29.63L19.65 31.54C19.47 31.64 19.26 31.62 19.09 31.5C18.92 31.38 18.84 31.18 18.88 30.98L19.57 26.93C19.65 26.43 19.49 25.93 19.13 25.58L16.2 22.71C16.05 22.57 16 22.36 16.07 22.17C16.13 21.97 16.29 21.84 16.5 21.81L20.56 21.22C21.06 21.15 21.49 20.84 21.71 20.38L23.53 16.7C23.62 16.51 23.8 16.4 24.01 16.4C24.22 16.4 24.39 16.51 24.49 16.7L26.31 20.38C26.53 20.83 26.96 21.15 27.46 21.22L31.52 21.81C31.72 21.84 31.88 21.98 31.95 22.17C32.01 22.37 31.96 22.57 31.82 22.71L28.88 25.58C28.5 25.93 28.34 26.44 28.42 26.93Z"/>
      </g>

      <g id="experiences--normal">
        <path d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.48 12.88 15.71 12.72C18.13 10.94 20.99 10.01 24 10.01C31.72 10.01 38 16.29 38 24.01C38 31.73 31.72 38.01 24 38.01C16.28 38.01 10 31.73 10 24.01C10 21.03 10.92 18.19 12.67 15.79C12.83 15.57 12.78 15.25 12.56 15.09C12.34 14.93 12.02 14.98 11.86 15.2C9.99 17.77 9 20.82 9 24.01C9 32.28 15.73 39.01 24 39.01C32.27 39.01 39 32.28 39 24.01C39 15.74 32.27 9 24 9Z"/>
        <path d="M16.12 18.08C15.89 18.23 15.82 18.54 15.97 18.77L22.94 29.72C23.04 29.87 23.2 29.95 23.36 29.95C23.45 29.95 23.54 29.92 23.63 29.87C23.86 29.72 23.93 29.41 23.78 29.18L16.81 18.23C16.66 18 16.35 17.94 16.12 18.08Z"/>
        <path d="M16.12 29.88C16.2 29.93 16.3 29.96 16.39 29.96C16.56 29.96 16.72 29.88 16.81 29.73L18.87 26.49C19.02 26.26 18.95 25.95 18.72 25.8C18.49 25.65 18.18 25.72 18.03 25.95L15.97 29.19C15.82 29.42 15.89 29.73 16.12 29.88Z"/>
        <path d="M21.44 22.02C21.61 22.02 21.77 21.94 21.86 21.79L23.78 18.78C23.93 18.55 23.86 18.24 23.63 18.09C23.4 17.94 23.09 18.01 22.94 18.24L21.02 21.25C20.87 21.48 20.94 21.79 21.17 21.94C21.25 21.99 21.35 22.02 21.44 22.02Z"/>
        <path d="M29.27 23.48H28.9C28.62 23.48 28.4 23.7 28.4 23.98C28.4 24.26 28.62 24.48 28.9 24.48H29.27C31.08 24.48 32.57 23.13 32.66 21.41C32.71 20.51 32.39 19.66 31.78 19.01C31.16 18.36 30.33 18 29.43 18H27.63C26.84 18 26.19 18.64 26.19 19.43V29.45C26.19 29.73 26.41 29.95 26.69 29.95C26.97 29.95 27.19 29.73 27.19 29.45V19.44C27.19 19.2 27.39 19.01 27.63 19.01H29.43C30.05 19.01 30.63 19.26 31.05 19.71C31.48 20.16 31.69 20.75 31.66 21.37C31.6 22.53 30.53 23.48 29.27 23.48Z"/>
      </g>
      <g id="experiences--glow">
        <filter id="experiences-filter-glow" x="-0.5" y="-0.5" width="2" height="2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#experiences-filter-glow)" d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.48 12.88 15.71 12.72C18.13 10.94 20.99 10.01 24 10.01C31.72 10.01 38 16.29 38 24.01C38 31.73 31.72 38.01 24 38.01C16.28 38.01 10 31.73 10 24.01C10 21.03 10.92 18.19 12.67 15.79C12.83 15.57 12.78 15.25 12.56 15.09C12.34 14.93 12.02 14.98 11.86 15.2C9.99 17.77 9 20.82 9 24.01C9 32.28 15.73 39.01 24 39.01C32.27 39.01 39 32.28 39 24.01C39 15.74 32.27 9 24 9Z"/>
        <path filter="url(#experiences-filter-glow)" d="M16.12 18.08C15.89 18.23 15.82 18.54 15.97 18.77L22.94 29.72C23.04 29.87 23.2 29.95 23.36 29.95C23.45 29.95 23.54 29.92 23.63 29.87C23.86 29.72 23.93 29.41 23.78 29.18L16.81 18.23C16.66 18 16.35 17.94 16.12 18.08Z"/>
        <path filter="url(#experiences-filter-glow)" d="M16.12 29.88C16.2 29.93 16.3 29.96 16.39 29.96C16.56 29.96 16.72 29.88 16.81 29.73L18.87 26.49C19.02 26.26 18.95 25.95 18.72 25.8C18.49 25.65 18.18 25.72 18.03 25.95L15.97 29.19C15.82 29.42 15.89 29.73 16.12 29.88Z"/>
        <path filter="url(#experiences-filter-glow)" d="M21.44 22.02C21.61 22.02 21.77 21.94 21.86 21.79L23.78 18.78C23.93 18.55 23.86 18.24 23.63 18.09C23.4 17.94 23.09 18.01 22.94 18.24L21.02 21.25C20.87 21.48 20.94 21.79 21.17 21.94C21.25 21.99 21.35 22.02 21.44 22.02Z"/>
        <path filter="url(#experiences-filter-glow)" d="M29.27 23.48H28.9C28.62 23.48 28.4 23.7 28.4 23.98C28.4 24.26 28.62 24.48 28.9 24.48H29.27C31.08 24.48 32.57 23.13 32.66 21.41C32.71 20.51 32.39 19.66 31.78 19.01C31.16 18.36 30.33 18 29.43 18H27.63C26.84 18 26.19 18.64 26.19 19.43V29.45C26.19 29.73 26.41 29.95 26.69 29.95C26.97 29.95 27.19 29.73 27.19 29.45V19.44C27.19 19.2 27.39 19.01 27.63 19.01H29.43C30.05 19.01 30.63 19.26 31.05 19.71C31.48 20.16 31.69 20.75 31.66 21.37C31.6 22.53 30.53 23.48 29.27 23.48Z"/>
        <path d="M24 9C20.78 9 17.71 10.01 15.12 11.91C14.9 12.07 14.85 12.39 15.01 12.61C15.17 12.83 15.48 12.88 15.71 12.72C18.13 10.94 20.99 10.01 24 10.01C31.72 10.01 38 16.29 38 24.01C38 31.73 31.72 38.01 24 38.01C16.28 38.01 10 31.73 10 24.01C10 21.03 10.92 18.19 12.67 15.79C12.83 15.57 12.78 15.25 12.56 15.09C12.34 14.93 12.02 14.98 11.86 15.2C9.99 17.77 9 20.82 9 24.01C9 32.28 15.73 39.01 24 39.01C32.27 39.01 39 32.28 39 24.01C39 15.74 32.27 9 24 9Z"/>
        <path d="M16.12 18.08C15.89 18.23 15.82 18.54 15.97 18.77L22.94 29.72C23.04 29.87 23.2 29.95 23.36 29.95C23.45 29.95 23.54 29.92 23.63 29.87C23.86 29.72 23.93 29.41 23.78 29.18L16.81 18.23C16.66 18 16.35 17.94 16.12 18.08Z"/>
        <path d="M16.12 29.88C16.2 29.93 16.3 29.96 16.39 29.96C16.56 29.96 16.72 29.88 16.81 29.73L18.87 26.49C19.02 26.26 18.95 25.95 18.72 25.8C18.49 25.65 18.18 25.72 18.03 25.95L15.97 29.19C15.82 29.42 15.89 29.73 16.12 29.88Z"/>
        <path d="M21.44 22.02C21.61 22.02 21.77 21.94 21.86 21.79L23.78 18.78C23.93 18.55 23.86 18.24 23.63 18.09C23.4 17.94 23.09 18.01 22.94 18.24L21.02 21.25C20.87 21.48 20.94 21.79 21.17 21.94C21.25 21.99 21.35 22.02 21.44 22.02Z"/>
        <path d="M29.27 23.48H28.9C28.62 23.48 28.4 23.7 28.4 23.98C28.4 24.26 28.62 24.48 28.9 24.48H29.27C31.08 24.48 32.57 23.13 32.66 21.41C32.71 20.51 32.39 19.66 31.78 19.01C31.16 18.36 30.33 18 29.43 18H27.63C26.84 18 26.19 18.64 26.19 19.43V29.45C26.19 29.73 26.41 29.95 26.69 29.95C26.97 29.95 27.19 29.73 27.19 29.45V19.44C27.19 19.2 27.39 19.01 27.63 19.01H29.43C30.05 19.01 30.63 19.26 31.05 19.71C31.48 20.16 31.69 20.75 31.66 21.37C31.6 22.53 30.53 23.48 29.27 23.48Z"/>
      </g>

      <g id="money--normal">
        <path d="M30.26 19.13C30.26 12.99 25.27 8 19.13 8C16.76 8 14.5 8.73 12.59 10.12C12.37 10.28 12.32 10.59 12.48 10.82C12.64 11.04 12.95 11.09 13.18 10.93C14.92 9.67 16.97 9 19.13 9C24.71 9 29.26 13.54 29.26 19.13C29.26 24.71 24.72 29.26 19.13 29.26C13.54 29.26 9 24.72 9 19.13C9 17.16 9.57001 15.25 10.64 13.61C10.79 13.38 10.73 13.07 10.49 12.92C10.26 12.77 9.95002 12.84 9.80002 13.07C8.62002 14.87 8 16.97 8 19.14C8 25.28 12.99 30.27 19.13 30.27C25.27 30.27 30.26 25.27 30.26 19.13Z"/>
        <path d="M31.31 23.3C31.11 23.49 31.09 23.8 31.28 24.01C32.8 25.66 33.64 27.81 33.64 30.06C33.64 34.99 29.63 38.99 24.71 38.99C20.67 38.99 17.12 36.27 16.08 32.37C16.01 32.1 15.73 31.95 15.47 32.02C15.2 32.09 15.04 32.37 15.12 32.63C16.28 36.97 20.22 40 24.72 40C30.2 40 34.65 35.54 34.65 30.07C34.65 27.57 33.72 25.18 32.03 23.34C31.83 23.13 31.52 23.12 31.31 23.3Z"/>
        <path d="M32.46 13.89C32.18 13.89 31.96 14.11 31.96 14.39C31.96 14.67 32.18 14.89 32.46 14.89C36.07 14.89 39.01 17.83 39.01 21.44C39.01 23.45 38.11 25.32 36.54 26.57C36.32 26.74 36.29 27.06 36.46 27.27C36.56 27.39 36.7 27.46 36.85 27.46C36.96 27.46 37.07 27.42 37.16 27.35C38.97 25.91 40.01 23.75 40.01 21.44C40.01 17.28 36.62 13.89 32.46 13.89Z"/>
        <path d="M15.85 17.22C15.85 18.56 16.94 19.64 18.27 19.64H20C20.78 19.64 21.42 20.28 21.42 21.06C21.42 21.84 20.78 22.48 20 22.48H16.94C16.66 22.48 16.44 22.7 16.44 22.98C16.44 23.26 16.66 23.48 16.94 23.48H20C21.34 23.48 22.42 22.39 22.42 21.06C22.42 19.73 21.33 18.64 20 18.64H18.27C17.49 18.64 16.85 18 16.85 17.22C16.85 16.44 17.49 15.8 18.27 15.8H21.33C21.61 15.8 21.83 15.58 21.83 15.3C21.83 15.02 21.61 14.8 21.33 14.8H18.27C16.93 14.8 15.85 15.88 15.85 17.22Z"/>
        <path d="M19.63 13.17V12.1C19.63 11.82 19.41 11.6 19.13 11.6C18.85 11.6 18.63 11.82 18.63 12.1V13.17C18.63 13.45 18.85 13.67 19.13 13.67C19.41 13.67 19.63 13.44 19.63 13.17Z"/>
        <path d="M18.64 25.1V26.17C18.64 26.45 18.86 26.67 19.14 26.67C19.42 26.67 19.64 26.45 19.64 26.17V25.1C19.64 24.82 19.42 24.6 19.14 24.6C18.86 24.6 18.64 24.82 18.64 25.1Z"/>
      </g>
      <g id="money--glow">
        <filter id="money-filter-glow" x="-10" y="-10" width="20" height="20">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#money-filter-glow)" d="M30.26 19.13C30.26 12.99 25.27 8 19.13 8C16.76 8 14.5 8.73 12.59 10.12C12.37 10.28 12.32 10.59 12.48 10.82C12.64 11.04 12.95 11.09 13.18 10.93C14.92 9.67 16.97 9 19.13 9C24.71 9 29.26 13.54 29.26 19.13C29.26 24.71 24.72 29.26 19.13 29.26C13.54 29.26 9 24.72 9 19.13C9 17.16 9.57001 15.25 10.64 13.61C10.79 13.38 10.73 13.07 10.49 12.92C10.26 12.77 9.95002 12.84 9.80002 13.07C8.62002 14.87 8 16.97 8 19.14C8 25.28 12.99 30.27 19.13 30.27C25.27 30.27 30.26 25.27 30.26 19.13Z"/>
        <path filter="url(#money-filter-glow)" d="M31.31 23.3C31.11 23.49 31.09 23.8 31.28 24.01C32.8 25.66 33.64 27.81 33.64 30.06C33.64 34.99 29.63 38.99 24.71 38.99C20.67 38.99 17.12 36.27 16.08 32.37C16.01 32.1 15.73 31.95 15.47 32.02C15.2 32.09 15.04 32.37 15.12 32.63C16.28 36.97 20.22 40 24.72 40C30.2 40 34.65 35.54 34.65 30.07C34.65 27.57 33.72 25.18 32.03 23.34C31.83 23.13 31.52 23.12 31.31 23.3Z"/>
        <path filter="url(#money-filter-glow)" d="M32.46 13.89C32.18 13.89 31.96 14.11 31.96 14.39C31.96 14.67 32.18 14.89 32.46 14.89C36.07 14.89 39.01 17.83 39.01 21.44C39.01 23.45 38.11 25.32 36.54 26.57C36.32 26.74 36.29 27.06 36.46 27.27C36.56 27.39 36.7 27.46 36.85 27.46C36.96 27.46 37.07 27.42 37.16 27.35C38.97 25.91 40.01 23.75 40.01 21.44C40.01 17.28 36.62 13.89 32.46 13.89Z"/>
        <path filter="url(#money-filter-glow)" d="M15.85 17.22C15.85 18.56 16.94 19.64 18.27 19.64H20C20.78 19.64 21.42 20.28 21.42 21.06C21.42 21.84 20.78 22.48 20 22.48H16.94C16.66 22.48 16.44 22.7 16.44 22.98C16.44 23.26 16.66 23.48 16.94 23.48H20C21.34 23.48 22.42 22.39 22.42 21.06C22.42 19.73 21.33 18.64 20 18.64H18.27C17.49 18.64 16.85 18 16.85 17.22C16.85 16.44 17.49 15.8 18.27 15.8H21.33C21.61 15.8 21.83 15.58 21.83 15.3C21.83 15.02 21.61 14.8 21.33 14.8H18.27C16.93 14.8 15.85 15.88 15.85 17.22Z"/>
        <path filter="url(#money-filter-glow)" d="M19.63 13.17V12.1C19.63 11.82 19.41 11.6 19.13 11.6C18.85 11.6 18.63 11.82 18.63 12.1V13.17C18.63 13.45 18.85 13.67 19.13 13.67C19.41 13.67 19.63 13.44 19.63 13.17Z"/>
        <path filter="url(#money-filter-glow)" d="M18.64 25.1V26.17C18.64 26.45 18.86 26.67 19.14 26.67C19.42 26.67 19.64 26.45 19.64 26.17V25.1C19.64 24.82 19.42 24.6 19.14 24.6C18.86 24.6 18.64 24.82 18.64 25.1Z"/>
        <path d="M30.26 19.13C30.26 12.99 25.27 8 19.13 8C16.76 8 14.5 8.73 12.59 10.12C12.37 10.28 12.32 10.59 12.48 10.82C12.64 11.04 12.95 11.09 13.18 10.93C14.92 9.67 16.97 9 19.13 9C24.71 9 29.26 13.54 29.26 19.13C29.26 24.71 24.72 29.26 19.13 29.26C13.54 29.26 9 24.72 9 19.13C9 17.16 9.57001 15.25 10.64 13.61C10.79 13.38 10.73 13.07 10.49 12.92C10.26 12.77 9.95002 12.84 9.80002 13.07C8.62002 14.87 8 16.97 8 19.14C8 25.28 12.99 30.27 19.13 30.27C25.27 30.27 30.26 25.27 30.26 19.13Z"/>
        <path d="M31.31 23.3C31.11 23.49 31.09 23.8 31.28 24.01C32.8 25.66 33.64 27.81 33.64 30.06C33.64 34.99 29.63 38.99 24.71 38.99C20.67 38.99 17.12 36.27 16.08 32.37C16.01 32.1 15.73 31.95 15.47 32.02C15.2 32.09 15.04 32.37 15.12 32.63C16.28 36.97 20.22 40 24.72 40C30.2 40 34.65 35.54 34.65 30.07C34.65 27.57 33.72 25.18 32.03 23.34C31.83 23.13 31.52 23.12 31.31 23.3Z"/>
        <path d="M32.46 13.89C32.18 13.89 31.96 14.11 31.96 14.39C31.96 14.67 32.18 14.89 32.46 14.89C36.07 14.89 39.01 17.83 39.01 21.44C39.01 23.45 38.11 25.32 36.54 26.57C36.32 26.74 36.29 27.06 36.46 27.27C36.56 27.39 36.7 27.46 36.85 27.46C36.96 27.46 37.07 27.42 37.16 27.35C38.97 25.91 40.01 23.75 40.01 21.44C40.01 17.28 36.62 13.89 32.46 13.89Z"/>
        <path d="M15.85 17.22C15.85 18.56 16.94 19.64 18.27 19.64H20C20.78 19.64 21.42 20.28 21.42 21.06C21.42 21.84 20.78 22.48 20 22.48H16.94C16.66 22.48 16.44 22.7 16.44 22.98C16.44 23.26 16.66 23.48 16.94 23.48H20C21.34 23.48 22.42 22.39 22.42 21.06C22.42 19.73 21.33 18.64 20 18.64H18.27C17.49 18.64 16.85 18 16.85 17.22C16.85 16.44 17.49 15.8 18.27 15.8H21.33C21.61 15.8 21.83 15.58 21.83 15.3C21.83 15.02 21.61 14.8 21.33 14.8H18.27C16.93 14.8 15.85 15.88 15.85 17.22Z"/>
        <path d="M19.63 13.17V12.1C19.63 11.82 19.41 11.6 19.13 11.6C18.85 11.6 18.63 11.82 18.63 12.1V13.17C18.63 13.45 18.85 13.67 19.13 13.67C19.41 13.67 19.63 13.44 19.63 13.17Z"/>
        <path d="M18.64 25.1V26.17C18.64 26.45 18.86 26.67 19.14 26.67C19.42 26.67 19.64 26.45 19.64 26.17V25.1C19.64 24.82 19.42 24.6 19.14 24.6C18.86 24.6 18.64 24.82 18.64 25.1Z"/>
      </g>

      <g id="region--normal">
        <path d="M39.353 25.79L34.873 22.56C34.393 22.21 33.7631 22.16 33.2331 22.44L30.2431 24.01C30.0031 24.14 29.903 24.44 30.033 24.68C30.163 24.92 30.463 25.02 30.713 24.89L33.7031 23.32C33.8931 23.22 34.113 23.24 34.283 23.36L38.7631 26.59C38.893 26.68 38.9731 26.82 38.9931 26.97C39.0131 27.13 38.9631 27.28 38.8631 27.4L31.933 35.64C31.783 35.81 31.5431 35.88 31.3331 35.81L23.413 33.14C22.943 32.98 22.413 33.06 22.0131 33.35L18.933 35.56C18.703 35.73 18.3931 35.69 18.2031 35.48L9.85305 26.41C9.80305 26.36 9.76306 26.29 9.74306 26.23L9.03304 24.33C8.97304 24.17 8.98304 24.01 9.06304 23.87C9.14304 23.73 9.27303 23.63 9.43303 23.59L13.5831 22.72C13.9231 22.65 14.2331 22.46 14.4531 22.2L16.433 19.84C16.613 19.63 16.583 19.31 16.373 19.14C16.163 18.96 15.8431 18.99 15.6731 19.2L13.693 21.56C13.613 21.65 13.503 21.72 13.383 21.75L9.23305 22.62C8.79305 22.71 8.41304 22.99 8.19304 23.39C7.97304 23.79 7.94304 24.26 8.09304 24.69L8.80306 26.59C8.87306 26.78 8.98306 26.95 9.11306 27.1L17.4531 36.19C17.9831 36.77 18.873 36.86 19.503 36.4L22.5831 34.19C22.7331 34.09 22.9131 34.06 23.0831 34.11L31.003 36.78C31.173 36.84 31.333 36.86 31.503 36.86C31.953 36.86 32.393 36.66 32.693 36.3L39.623 28.06C39.903 27.73 40.033 27.3 39.973 26.87C39.943 26.44 39.703 26.05 39.353 25.79Z"/>
        <path d="M18.8331 19.08L24.2931 28.74C24.3831 28.9 24.5531 28.99 24.7331 28.99C24.8131 28.99 24.9031 28.97 24.9831 28.93C25.2231 28.79 25.3131 28.49 25.1731 28.25L19.7131 18.59C18.6631 16.73 18.7631 14.52 19.7831 12.8C19.8331 12.72 19.8831 12.63 19.9431 12.55C19.9931 12.47 20.0431 12.4 20.1031 12.33C20.1631 12.25 20.2231 12.17 20.2931 12.09C20.3531 12.02 20.4031 11.96 20.4631 11.89C20.5331 11.81 20.6031 11.74 20.6731 11.67C20.7331 11.61 20.7931 11.55 20.8631 11.49C20.9431 11.42 21.0231 11.35 21.1031 11.29C21.1731 11.24 21.2331 11.18 21.3031 11.13C21.3831 11.07 21.4731 11.01 21.5631 10.95C21.6331 10.9 21.7031 10.86 21.7731 10.81C21.8731 10.75 21.9631 10.7 22.0631 10.65C22.1231 10.62 22.1931 10.58 22.2531 10.55C22.3631 10.5 22.4831 10.44 22.6031 10.4C22.6531 10.38 22.7031 10.36 22.7531 10.34C22.8831 10.29 23.0131 10.25 23.1431 10.21C23.1831 10.2 23.2331 10.19 23.2731 10.18C23.4031 10.14 23.5431 10.11 23.6831 10.09C23.7331 10.08 23.7831 10.07 23.8331 10.06C23.9531 10.04 24.0831 10.02 24.2131 10.01C24.2831 10 24.3631 10 24.4331 10C24.5331 9.99 24.6331 9.99 24.7331 9.99C24.8331 9.99 24.9431 9.99 25.0431 10C25.1131 10 25.1831 10.01 25.2531 10.01C25.3831 10.02 25.5131 10.04 25.6331 10.06C25.6831 10.07 25.7331 10.08 25.7831 10.08C25.9231 10.11 26.0631 10.14 26.2031 10.17C26.2431 10.18 26.2831 10.19 26.3231 10.2C26.4631 10.24 26.5931 10.28 26.7331 10.33C26.7731 10.35 26.8231 10.36 26.8631 10.38C26.9831 10.43 27.1031 10.48 27.2231 10.54C27.2831 10.57 27.3431 10.6 27.4031 10.63C27.5031 10.68 27.6031 10.74 27.7031 10.8C27.7731 10.84 27.8331 10.88 27.9031 10.93C27.9931 10.99 28.0831 11.05 28.1731 11.12C28.2331 11.17 28.2931 11.22 28.3631 11.27C28.4531 11.34 28.5331 11.41 28.6131 11.49C28.6731 11.54 28.7231 11.6 28.7831 11.65C28.8631 11.73 28.9431 11.81 29.0131 11.89C29.0631 11.95 29.1131 12.01 29.1631 12.07C29.2331 12.16 29.3031 12.25 29.3731 12.34C29.4231 12.4 29.4631 12.47 29.5031 12.53C29.5631 12.62 29.6231 12.72 29.6831 12.81C30.6931 14.53 30.7931 16.73 29.7431 18.59L25.8031 25.56C25.6631 25.8 25.7531 26.11 25.9931 26.24C26.0731 26.28 26.1531 26.3 26.2431 26.3C26.4131 26.3 26.5831 26.21 26.6831 26.05L30.6231 19.08C31.5131 17.51 31.7331 15.68 31.2531 13.94C31.1031 13.41 30.8931 12.91 30.6331 12.44C30.6331 12.43 30.6331 12.43 30.6231 12.42C30.6131 12.4 30.5931 12.37 30.5731 12.35C30.4831 12.19 30.3831 12.04 30.2831 11.9C30.2531 11.86 30.2331 11.82 30.2031 11.79C30.1031 11.65 29.9931 11.51 29.8731 11.38C29.8431 11.34 29.8031 11.3 29.7731 11.26C29.6631 11.14 29.5531 11.02 29.4331 10.9C29.3931 10.86 29.3431 10.81 29.2931 10.77C29.1831 10.67 29.0631 10.57 28.9431 10.47C28.8831 10.42 28.8331 10.38 28.7731 10.34C28.6531 10.25 28.5331 10.17 28.4131 10.09C28.3531 10.05 28.2931 10.01 28.2231 9.97C28.1631 9.93 28.1031 9.89 28.0431 9.86C27.9731 9.82 27.9031 9.79 27.8331 9.75C27.7731 9.72 27.7031 9.69 27.6431 9.66C27.5031 9.59 27.3531 9.53 27.2031 9.47C27.1531 9.45 27.1031 9.43 27.0531 9.41C26.8931 9.35 26.7331 9.3 26.5731 9.25C26.5331 9.24 26.4831 9.23 26.4431 9.22C26.2731 9.18 26.1131 9.14 25.9431 9.11C25.8931 9.1 25.8431 9.09 25.7831 9.08C25.6231 9.06 25.4731 9.03 25.3131 9.02C25.2331 9.01 25.1631 9.01 25.0831 9.01C24.9531 9 24.8231 9 24.6931 9C24.5831 9 24.4731 9.01 24.3631 9.01C24.2631 9.02 24.1631 9.02 24.0631 9.03C23.9231 9.04 23.7931 9.06 23.6631 9.08C23.5931 9.09 23.5131 9.1 23.4431 9.12C23.2931 9.15 23.1531 9.18 23.0031 9.22C22.9431 9.24 22.8731 9.25 22.8131 9.27C22.6731 9.31 22.5331 9.36 22.3931 9.41C22.3231 9.44 22.2531 9.46 22.1831 9.49C22.0531 9.54 21.9331 9.6 21.8031 9.66C21.7231 9.7 21.6331 9.74 21.5531 9.78C21.4931 9.81 21.4331 9.84 21.3731 9.87C21.3231 9.9 21.2731 9.93 21.2231 9.96C21.1331 10.01 21.0431 10.07 20.9631 10.13C20.8631 10.2 20.7631 10.26 20.6731 10.33C20.5931 10.39 20.5031 10.46 20.4231 10.53C20.3331 10.6 20.2431 10.68 20.1531 10.76C20.0731 10.83 20.0031 10.9 19.9231 10.98C19.8431 11.06 19.7531 11.15 19.6731 11.23C19.6031 11.31 19.5331 11.39 19.4731 11.47C19.3931 11.56 19.3231 11.66 19.2531 11.75C19.1931 11.83 19.1331 11.92 19.0731 12.01C19.0031 12.11 18.9431 12.21 18.8831 12.31C18.8531 12.35 18.8231 12.39 18.8031 12.44C18.7931 12.45 18.7931 12.47 18.7931 12.48C17.7131 14.45 17.6331 16.95 18.8331 19.08Z"/>
        <path d="M27.8831 15.93C27.8831 14.19 26.4631 12.77 24.7231 12.77C22.9831 12.77 21.563 14.19 21.563 15.93C21.563 17.67 22.9831 19.09 24.7231 19.09C26.4731 19.09 27.8831 17.67 27.8831 15.93ZM24.7331 18.09C23.5431 18.09 22.5731 17.12 22.5731 15.93C22.5731 14.74 23.5431 13.77 24.7331 13.77C25.9231 13.77 26.8931 14.74 26.8931 15.93C26.8931 17.12 25.9231 18.09 24.7331 18.09Z"/>
      </g>
      <g id="region--glow">
        <filter id="region-filter-glow" x="-0.5" y="-0.5" width="2" height="2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
        <path filter="url(#region-filter-glow)" d="M39.353 25.79L34.873 22.56C34.393 22.21 33.7631 22.16 33.2331 22.44L30.2431 24.01C30.0031 24.14 29.903 24.44 30.033 24.68C30.163 24.92 30.463 25.02 30.713 24.89L33.7031 23.32C33.8931 23.22 34.113 23.24 34.283 23.36L38.7631 26.59C38.893 26.68 38.9731 26.82 38.9931 26.97C39.0131 27.13 38.9631 27.28 38.8631 27.4L31.933 35.64C31.783 35.81 31.5431 35.88 31.3331 35.81L23.413 33.14C22.943 32.98 22.413 33.06 22.0131 33.35L18.933 35.56C18.703 35.73 18.3931 35.69 18.2031 35.48L9.85305 26.41C9.80305 26.36 9.76306 26.29 9.74306 26.23L9.03304 24.33C8.97304 24.17 8.98304 24.01 9.06304 23.87C9.14304 23.73 9.27303 23.63 9.43303 23.59L13.5831 22.72C13.9231 22.65 14.2331 22.46 14.4531 22.2L16.433 19.84C16.613 19.63 16.583 19.31 16.373 19.14C16.163 18.96 15.8431 18.99 15.6731 19.2L13.693 21.56C13.613 21.65 13.503 21.72 13.383 21.75L9.23305 22.62C8.79305 22.71 8.41304 22.99 8.19304 23.39C7.97304 23.79 7.94304 24.26 8.09304 24.69L8.80306 26.59C8.87306 26.78 8.98306 26.95 9.11306 27.1L17.4531 36.19C17.9831 36.77 18.873 36.86 19.503 36.4L22.5831 34.19C22.7331 34.09 22.9131 34.06 23.0831 34.11L31.003 36.78C31.173 36.84 31.333 36.86 31.503 36.86C31.953 36.86 32.393 36.66 32.693 36.3L39.623 28.06C39.903 27.73 40.033 27.3 39.973 26.87C39.943 26.44 39.703 26.05 39.353 25.79Z"/>
        <path filter="url(#region-filter-glow)" d="M18.8331 19.08L24.2931 28.74C24.3831 28.9 24.5531 28.99 24.7331 28.99C24.8131 28.99 24.9031 28.97 24.9831 28.93C25.2231 28.79 25.3131 28.49 25.1731 28.25L19.7131 18.59C18.6631 16.73 18.7631 14.52 19.7831 12.8C19.8331 12.72 19.8831 12.63 19.9431 12.55C19.9931 12.47 20.0431 12.4 20.1031 12.33C20.1631 12.25 20.2231 12.17 20.2931 12.09C20.3531 12.02 20.4031 11.96 20.4631 11.89C20.5331 11.81 20.6031 11.74 20.6731 11.67C20.7331 11.61 20.7931 11.55 20.8631 11.49C20.9431 11.42 21.0231 11.35 21.1031 11.29C21.1731 11.24 21.2331 11.18 21.3031 11.13C21.3831 11.07 21.4731 11.01 21.5631 10.95C21.6331 10.9 21.7031 10.86 21.7731 10.81C21.8731 10.75 21.9631 10.7 22.0631 10.65C22.1231 10.62 22.1931 10.58 22.2531 10.55C22.3631 10.5 22.4831 10.44 22.6031 10.4C22.6531 10.38 22.7031 10.36 22.7531 10.34C22.8831 10.29 23.0131 10.25 23.1431 10.21C23.1831 10.2 23.2331 10.19 23.2731 10.18C23.4031 10.14 23.5431 10.11 23.6831 10.09C23.7331 10.08 23.7831 10.07 23.8331 10.06C23.9531 10.04 24.0831 10.02 24.2131 10.01C24.2831 10 24.3631 10 24.4331 10C24.5331 9.99 24.6331 9.99 24.7331 9.99C24.8331 9.99 24.9431 9.99 25.0431 10C25.1131 10 25.1831 10.01 25.2531 10.01C25.3831 10.02 25.5131 10.04 25.6331 10.06C25.6831 10.07 25.7331 10.08 25.7831 10.08C25.9231 10.11 26.0631 10.14 26.2031 10.17C26.2431 10.18 26.2831 10.19 26.3231 10.2C26.4631 10.24 26.5931 10.28 26.7331 10.33C26.7731 10.35 26.8231 10.36 26.8631 10.38C26.9831 10.43 27.1031 10.48 27.2231 10.54C27.2831 10.57 27.3431 10.6 27.4031 10.63C27.5031 10.68 27.6031 10.74 27.7031 10.8C27.7731 10.84 27.8331 10.88 27.9031 10.93C27.9931 10.99 28.0831 11.05 28.1731 11.12C28.2331 11.17 28.2931 11.22 28.3631 11.27C28.4531 11.34 28.5331 11.41 28.6131 11.49C28.6731 11.54 28.7231 11.6 28.7831 11.65C28.8631 11.73 28.9431 11.81 29.0131 11.89C29.0631 11.95 29.1131 12.01 29.1631 12.07C29.2331 12.16 29.3031 12.25 29.3731 12.34C29.4231 12.4 29.4631 12.47 29.5031 12.53C29.5631 12.62 29.6231 12.72 29.6831 12.81C30.6931 14.53 30.7931 16.73 29.7431 18.59L25.8031 25.56C25.6631 25.8 25.7531 26.11 25.9931 26.24C26.0731 26.28 26.1531 26.3 26.2431 26.3C26.4131 26.3 26.5831 26.21 26.6831 26.05L30.6231 19.08C31.5131 17.51 31.7331 15.68 31.2531 13.94C31.1031 13.41 30.8931 12.91 30.6331 12.44C30.6331 12.43 30.6331 12.43 30.6231 12.42C30.6131 12.4 30.5931 12.37 30.5731 12.35C30.4831 12.19 30.3831 12.04 30.2831 11.9C30.2531 11.86 30.2331 11.82 30.2031 11.79C30.1031 11.65 29.9931 11.51 29.8731 11.38C29.8431 11.34 29.8031 11.3 29.7731 11.26C29.6631 11.14 29.5531 11.02 29.4331 10.9C29.3931 10.86 29.3431 10.81 29.2931 10.77C29.1831 10.67 29.0631 10.57 28.9431 10.47C28.8831 10.42 28.8331 10.38 28.7731 10.34C28.6531 10.25 28.5331 10.17 28.4131 10.09C28.3531 10.05 28.2931 10.01 28.2231 9.97C28.1631 9.93 28.1031 9.89 28.0431 9.86C27.9731 9.82 27.9031 9.79 27.8331 9.75C27.7731 9.72 27.7031 9.69 27.6431 9.66C27.5031 9.59 27.3531 9.53 27.2031 9.47C27.1531 9.45 27.1031 9.43 27.0531 9.41C26.8931 9.35 26.7331 9.3 26.5731 9.25C26.5331 9.24 26.4831 9.23 26.4431 9.22C26.2731 9.18 26.1131 9.14 25.9431 9.11C25.8931 9.1 25.8431 9.09 25.7831 9.08C25.6231 9.06 25.4731 9.03 25.3131 9.02C25.2331 9.01 25.1631 9.01 25.0831 9.01C24.9531 9 24.8231 9 24.6931 9C24.5831 9 24.4731 9.01 24.3631 9.01C24.2631 9.02 24.1631 9.02 24.0631 9.03C23.9231 9.04 23.7931 9.06 23.6631 9.08C23.5931 9.09 23.5131 9.1 23.4431 9.12C23.2931 9.15 23.1531 9.18 23.0031 9.22C22.9431 9.24 22.8731 9.25 22.8131 9.27C22.6731 9.31 22.5331 9.36 22.3931 9.41C22.3231 9.44 22.2531 9.46 22.1831 9.49C22.0531 9.54 21.9331 9.6 21.8031 9.66C21.7231 9.7 21.6331 9.74 21.5531 9.78C21.4931 9.81 21.4331 9.84 21.3731 9.87C21.3231 9.9 21.2731 9.93 21.2231 9.96C21.1331 10.01 21.0431 10.07 20.9631 10.13C20.8631 10.2 20.7631 10.26 20.6731 10.33C20.5931 10.39 20.5031 10.46 20.4231 10.53C20.3331 10.6 20.2431 10.68 20.1531 10.76C20.0731 10.83 20.0031 10.9 19.9231 10.98C19.8431 11.06 19.7531 11.15 19.6731 11.23C19.6031 11.31 19.5331 11.39 19.4731 11.47C19.3931 11.56 19.3231 11.66 19.2531 11.75C19.1931 11.83 19.1331 11.92 19.0731 12.01C19.0031 12.11 18.9431 12.21 18.8831 12.31C18.8531 12.35 18.8231 12.39 18.8031 12.44C18.7931 12.45 18.7931 12.47 18.7931 12.48C17.7131 14.45 17.6331 16.95 18.8331 19.08Z"/>
        <path filter="url(#region-filter-glow)" d="M27.8831 15.93C27.8831 14.19 26.4631 12.77 24.7231 12.77C22.9831 12.77 21.563 14.19 21.563 15.93C21.563 17.67 22.9831 19.09 24.7231 19.09C26.4731 19.09 27.8831 17.67 27.8831 15.93ZM24.7331 18.09C23.5431 18.09 22.5731 17.12 22.5731 15.93C22.5731 14.74 23.5431 13.77 24.7331 13.77C25.9231 13.77 26.8931 14.74 26.8931 15.93C26.8931 17.12 25.9231 18.09 24.7331 18.09Z"/>
        <path d="M39.353 25.79L34.873 22.56C34.393 22.21 33.7631 22.16 33.2331 22.44L30.2431 24.01C30.0031 24.14 29.903 24.44 30.033 24.68C30.163 24.92 30.463 25.02 30.713 24.89L33.7031 23.32C33.8931 23.22 34.113 23.24 34.283 23.36L38.7631 26.59C38.893 26.68 38.9731 26.82 38.9931 26.97C39.0131 27.13 38.9631 27.28 38.8631 27.4L31.933 35.64C31.783 35.81 31.5431 35.88 31.3331 35.81L23.413 33.14C22.943 32.98 22.413 33.06 22.0131 33.35L18.933 35.56C18.703 35.73 18.3931 35.69 18.2031 35.48L9.85305 26.41C9.80305 26.36 9.76306 26.29 9.74306 26.23L9.03304 24.33C8.97304 24.17 8.98304 24.01 9.06304 23.87C9.14304 23.73 9.27303 23.63 9.43303 23.59L13.5831 22.72C13.9231 22.65 14.2331 22.46 14.4531 22.2L16.433 19.84C16.613 19.63 16.583 19.31 16.373 19.14C16.163 18.96 15.8431 18.99 15.6731 19.2L13.693 21.56C13.613 21.65 13.503 21.72 13.383 21.75L9.23305 22.62C8.79305 22.71 8.41304 22.99 8.19304 23.39C7.97304 23.79 7.94304 24.26 8.09304 24.69L8.80306 26.59C8.87306 26.78 8.98306 26.95 9.11306 27.1L17.4531 36.19C17.9831 36.77 18.873 36.86 19.503 36.4L22.5831 34.19C22.7331 34.09 22.9131 34.06 23.0831 34.11L31.003 36.78C31.173 36.84 31.333 36.86 31.503 36.86C31.953 36.86 32.393 36.66 32.693 36.3L39.623 28.06C39.903 27.73 40.033 27.3 39.973 26.87C39.943 26.44 39.703 26.05 39.353 25.79Z"/>
        <path d="M18.8331 19.08L24.2931 28.74C24.3831 28.9 24.5531 28.99 24.7331 28.99C24.8131 28.99 24.9031 28.97 24.9831 28.93C25.2231 28.79 25.3131 28.49 25.1731 28.25L19.7131 18.59C18.6631 16.73 18.7631 14.52 19.7831 12.8C19.8331 12.72 19.8831 12.63 19.9431 12.55C19.9931 12.47 20.0431 12.4 20.1031 12.33C20.1631 12.25 20.2231 12.17 20.2931 12.09C20.3531 12.02 20.4031 11.96 20.4631 11.89C20.5331 11.81 20.6031 11.74 20.6731 11.67C20.7331 11.61 20.7931 11.55 20.8631 11.49C20.9431 11.42 21.0231 11.35 21.1031 11.29C21.1731 11.24 21.2331 11.18 21.3031 11.13C21.3831 11.07 21.4731 11.01 21.5631 10.95C21.6331 10.9 21.7031 10.86 21.7731 10.81C21.8731 10.75 21.9631 10.7 22.0631 10.65C22.1231 10.62 22.1931 10.58 22.2531 10.55C22.3631 10.5 22.4831 10.44 22.6031 10.4C22.6531 10.38 22.7031 10.36 22.7531 10.34C22.8831 10.29 23.0131 10.25 23.1431 10.21C23.1831 10.2 23.2331 10.19 23.2731 10.18C23.4031 10.14 23.5431 10.11 23.6831 10.09C23.7331 10.08 23.7831 10.07 23.8331 10.06C23.9531 10.04 24.0831 10.02 24.2131 10.01C24.2831 10 24.3631 10 24.4331 10C24.5331 9.99 24.6331 9.99 24.7331 9.99C24.8331 9.99 24.9431 9.99 25.0431 10C25.1131 10 25.1831 10.01 25.2531 10.01C25.3831 10.02 25.5131 10.04 25.6331 10.06C25.6831 10.07 25.7331 10.08 25.7831 10.08C25.9231 10.11 26.0631 10.14 26.2031 10.17C26.2431 10.18 26.2831 10.19 26.3231 10.2C26.4631 10.24 26.5931 10.28 26.7331 10.33C26.7731 10.35 26.8231 10.36 26.8631 10.38C26.9831 10.43 27.1031 10.48 27.2231 10.54C27.2831 10.57 27.3431 10.6 27.4031 10.63C27.5031 10.68 27.6031 10.74 27.7031 10.8C27.7731 10.84 27.8331 10.88 27.9031 10.93C27.9931 10.99 28.0831 11.05 28.1731 11.12C28.2331 11.17 28.2931 11.22 28.3631 11.27C28.4531 11.34 28.5331 11.41 28.6131 11.49C28.6731 11.54 28.7231 11.6 28.7831 11.65C28.8631 11.73 28.9431 11.81 29.0131 11.89C29.0631 11.95 29.1131 12.01 29.1631 12.07C29.2331 12.16 29.3031 12.25 29.3731 12.34C29.4231 12.4 29.4631 12.47 29.5031 12.53C29.5631 12.62 29.6231 12.72 29.6831 12.81C30.6931 14.53 30.7931 16.73 29.7431 18.59L25.8031 25.56C25.6631 25.8 25.7531 26.11 25.9931 26.24C26.0731 26.28 26.1531 26.3 26.2431 26.3C26.4131 26.3 26.5831 26.21 26.6831 26.05L30.6231 19.08C31.5131 17.51 31.7331 15.68 31.2531 13.94C31.1031 13.41 30.8931 12.91 30.6331 12.44C30.6331 12.43 30.6331 12.43 30.6231 12.42C30.6131 12.4 30.5931 12.37 30.5731 12.35C30.4831 12.19 30.3831 12.04 30.2831 11.9C30.2531 11.86 30.2331 11.82 30.2031 11.79C30.1031 11.65 29.9931 11.51 29.8731 11.38C29.8431 11.34 29.8031 11.3 29.7731 11.26C29.6631 11.14 29.5531 11.02 29.4331 10.9C29.3931 10.86 29.3431 10.81 29.2931 10.77C29.1831 10.67 29.0631 10.57 28.9431 10.47C28.8831 10.42 28.8331 10.38 28.7731 10.34C28.6531 10.25 28.5331 10.17 28.4131 10.09C28.3531 10.05 28.2931 10.01 28.2231 9.97C28.1631 9.93 28.1031 9.89 28.0431 9.86C27.9731 9.82 27.9031 9.79 27.8331 9.75C27.7731 9.72 27.7031 9.69 27.6431 9.66C27.5031 9.59 27.3531 9.53 27.2031 9.47C27.1531 9.45 27.1031 9.43 27.0531 9.41C26.8931 9.35 26.7331 9.3 26.5731 9.25C26.5331 9.24 26.4831 9.23 26.4431 9.22C26.2731 9.18 26.1131 9.14 25.9431 9.11C25.8931 9.1 25.8431 9.09 25.7831 9.08C25.6231 9.06 25.4731 9.03 25.3131 9.02C25.2331 9.01 25.1631 9.01 25.0831 9.01C24.9531 9 24.8231 9 24.6931 9C24.5831 9 24.4731 9.01 24.3631 9.01C24.2631 9.02 24.1631 9.02 24.0631 9.03C23.9231 9.04 23.7931 9.06 23.6631 9.08C23.5931 9.09 23.5131 9.1 23.4431 9.12C23.2931 9.15 23.1531 9.18 23.0031 9.22C22.9431 9.24 22.8731 9.25 22.8131 9.27C22.6731 9.31 22.5331 9.36 22.3931 9.41C22.3231 9.44 22.2531 9.46 22.1831 9.49C22.0531 9.54 21.9331 9.6 21.8031 9.66C21.7231 9.7 21.6331 9.74 21.5531 9.78C21.4931 9.81 21.4331 9.84 21.3731 9.87C21.3231 9.9 21.2731 9.93 21.2231 9.96C21.1331 10.01 21.0431 10.07 20.9631 10.13C20.8631 10.2 20.7631 10.26 20.6731 10.33C20.5931 10.39 20.5031 10.46 20.4231 10.53C20.3331 10.6 20.2431 10.68 20.1531 10.76C20.0731 10.83 20.0031 10.9 19.9231 10.98C19.8431 11.06 19.7531 11.15 19.6731 11.23C19.6031 11.31 19.5331 11.39 19.4731 11.47C19.3931 11.56 19.3231 11.66 19.2531 11.75C19.1931 11.83 19.1331 11.92 19.0731 12.01C19.0031 12.11 18.9431 12.21 18.8831 12.31C18.8531 12.35 18.8231 12.39 18.8031 12.44C18.7931 12.45 18.7931 12.47 18.7931 12.48C17.7131 14.45 17.6331 16.95 18.8331 19.08Z"/>
        <path d="M27.8831 15.93C27.8831 14.19 26.4631 12.77 24.7231 12.77C22.9831 12.77 21.563 14.19 21.563 15.93C21.563 17.67 22.9831 19.09 24.7231 19.09C26.4731 19.09 27.8831 17.67 27.8831 15.93ZM24.7331 18.09C23.5431 18.09 22.5731 17.12 22.5731 15.93C22.5731 14.74 23.5431 13.77 24.7331 13.77C25.9231 13.77 26.8931 14.74 26.8931 15.93C26.8931 17.12 25.9231 18.09 24.7331 18.09Z"/>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);