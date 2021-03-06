import { Theme } from "reflexjs"

const theme: Theme = {
  useRootStyles: true,
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  initialColorModeName: "light",
  colors: {
    text: "#111",
    heading: "#111",
    background: "#fff",
    primary: "#06f",
    secondary: "#243E73",
    gray: "#6c6c6c",
    border: "#eaeaea",
    muted: "#f7f7f8",
    prism: {
      text: "#d6deeb",
      lineNumber: "#88a0d6",
      background: "#031528",
      comment: "#93b4b4",
      string: "#addb67",
      var: "#d6deeb",
      number: "#f78c6c",
      constant: "#82aaff",
      punctuation: "#c792ea",
      className: "#ffcb8b",
      tag: "#7fdbca",
      boolean: "#ff5874",
      property: "#80cbc4",
      namespace: "#b2ccd6",
      highlight: "#243E73",
      file: "#92B5B2",
    },
    modes: {
      dark: {
        text: "#a0aec0",
        heading: "#fff",
        background: "#1a202c",
        primary: "#06f",
        border: "#2d3748",
        gray: "#718096",
        muted: "#2d3748",
      },
    },
  },
  fonts: {
    serif: "Playfair Display, serif",
    sans: "-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif",
    monospace:
      "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    18: "4.5rem",
    20: "5rem",
    22: "5.5rem",
    24: "6rem",
    26: "6.5rem",
    28: "7rem",
    30: "7.5rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
  },
  sizes: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    18: "4.5rem",
    20: "5rem",
    22: "5.5rem",
    24: "6rem",
    26: "6.5rem",
    28: "7rem",
    30: "7.5rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    auto: "auto",
    half: "50%",
    full: "100%",
    screen: "100vw",
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "3px solid",
    "4px solid",
    "5px solid",
    "6px solid",
    "7px solid",
    "8px solid",
    "9px solid",
    "10px solid",
  ],
  radii: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.375rem",
    xl: "0.5rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "4xl": "2rem",
    full: "9999px",
  },
  shadows: {
    none: "none",
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    lg: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    xl:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "2xl":
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "3xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
  },
  gridTemplateColumns: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))",
  },
  gridTemplateRows: {
    none: "none",
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
  },
  styles: {
    root: {
      "*": {
        m: 0,
        p: 0,
        listStyle: "none",
        border: "0 solid",
        borderColor: "border",
      },
      body: {
        fontDisplay: "optional",
        fontFamily: "sans",
        fontSize: ["14px", "16px"],
        lineHeight: "normal",
        fontFeatureSettings: "'kern'",
        textRendering: "optimizeLegibility",
      },
      hr: {
        borderBottomWidth: 1,
        my: 6,
      },
    },
  },
  container: {
    px: "6|4|4",
    maxW: 1200,
    mx: "auto",

    md: {
      maxW: 800,
    },

    sm: {
      maxW: 680,
    },
  },

  text: {
    lead: {
      fontFamily: "sans",
      fontSize: "2xl",
      lineHeight: "normal",
      fontWeight: "normal",
    },

    paragraph: {
      fontFamily: "sans",
      fontSize: "xl",
      my: 8,
      lineHeight: 8,
    },

    pre: {
      color: "prism.text",
      backgroundColor: "prism.background",
      fontFamily: "monospace",
      fontSize: "md",
      lineHeight: 7,
      tabSize: 2,
      hyphens: "none",
      my: 8,
      py: 4,
      overflow: "auto",
      borderRadius: "md",
      whiteSpace: "pre-wrap",
      ".plain": {
        minHeight: "1ch",
        display: "inline-block",
      },
      ".attr-name": {
        fontStyle: "italic",
      },
      ".comment": {
        color: "prism.comment",
      },
      ".attr-name, .string, .url": {
        color: "prism.string",
      },
      ".variable": {
        color: "prism.var",
      },
      ".number": {
        color: "prism.number",
      },
      ".builtin, .char, .constant, .function": {
        color: "prism.constant",
      },
      ".punctuation, .selector, .doctype": {
        color: "prism.punctuation",
      },
      ".class-name": {
        color: "prism.className",
      },
      ".operator, .keyword": {
        color: "prism.tag",
      },
      ".boolean": {
        color: "prism.boolean",
      },
      ".property": {
        color: "prism.property",
      },
      ".namespace": {
        color: "prism.namespace",
      },
      ".highlight": {
        bg: "prism.highlight",
      },
    },
  },

  heading: {
    color: "heading",
    fontFamily: "serif",
    fontWeight: "semibold",
    lineHeight: "tight",
    letterSpacing: "tight",

    h1: {
      fontSize: "5xl|6xl",
      fontWeight: "black",
    },
    h2: {
      fontSize: "2xl|3xl|4xl",
    },
    h3: {
      fontSize: "xl|2xl|3xl",
    },
    h4: {
      fontSize: "lg|xl|2xl",
    },
    title: {
      variant: "heading.h1",
      fontSize: "4xl|5xl|6xl",
    },
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "text",
    bg: "muted",
    fontFamily: "sans",
    fontSize: "md",
    lineHeight: "none",
    textDecoration: "none",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
    px: 4,
    py: 3,
    cursor: "pointer",
    transition: "all .15s ease-in",

    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    ":hover, :focus": {
      boxShadow: "lg",
    },

    sm: {
      px: 3,
      py: 2,
      fontSize: "sm",
    },

    lg: {
      px: 5,
      py: 4,
      fontSize: "xl",
    },

    primary: {
      bg: "primary",
      color: "white",
      borderColor: "primary",

      "&:hover, &:focus": {
        bg: "primaryHover",
        color: "white",
      },
    },

    secondary: {
      bg: "secondary",
      color: "white",
      borderColor: "secondary",

      "&:hover, &:focus": {
        bg: "secondaryHover",
        color: "white",
        borderColor: "secondaryHover",
      },
    },

    accent: {
      bg: "accent",
      color: "white",
      borderColor: "accent",

      "&:hover, &:focus": {
        bg: "accentHover",
        color: "white",
        borderColor: "accentHover",
      },
    },

    link: {
      bg: "transparent",
      color: "text",
      borderColor: "transparent",

      "&:hover, &:focus": {
        bg: "transparent",
        borderColor: "transparent",
        boxShadow: "none",
        color: "primary",
      },
    },

    outline: {
      bg: "transparent",
      color: "text",
      borderColor: "text",

      "&:hover, &:focus": {
        bg: "text",
        borderColor: "text",
        boxShadow: "none",
        color: "background",
      },
    },

    icon: {
      bg: "transparent",
      p: 2,
      borderColor: "transparent",

      ":hover, :focus": {
        transform: "none",
        boxShadow: "none",
        color: "primary",
      },
    },
  },

  list: {
    variant: "text.paragraph",
    my: 6,
    ml: 6,

    li: {
      mb: 4,
    },

    unordered: {
      li: {
        listStyle: "disc",
      },
    },

    ordered: {
      li: {
        listStyle: "decimal",
      },
    },
  },

  input: {
    bg: "muted",
    color: "text",
    fontFamily: "sans",
    fontSize: "md",
    lineHeight: "none",
    borderWidth: 1,
    borderColor: "border",
    borderRadius: "md",
    px: 4,
    py: 3,
    width: "100%",
    h: 12,

    sm: {
      py: 2,
      fontSize: "sm",
      h: 8,
    },

    lg: {
      py: 4,
      fontSize: "xl",
      h: 14,
    },

    "&:focus": {
      borderColor: "primary",
      outline: "none",
    },

    "&[type=checkbox], &[type=radio]": {
      display: "none",

      "+ label": {
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",

        "&:before": {
          content: "''",
          width: "14px",
          height: "14px",
          flex: "none",
          bg: "background",
          borderRadius: "sm",
          mr: 3,
          border: "2px solid",
          borderColor: "background",
          boxShadow: ({ colors }) => `0 0 0 1px ${colors.border}`,
        },
      },
    },

    "&:checked + label:before": {
      bg: "primary",
      boxShadow: ({ colors }) => `0 0 0 2px ${colors.primary}`,
    },

    "&[type=radio]": {
      "+ label": {
        "&:before": {
          borderRadius: "full",
        },
      },
    },
  },
  select: {
    variant: "input",
    pl: 4,
    pr: 12,
    py: 3,
    h: 12,
    appearance: "none",
    cursor: "pointer",
    width: "100%",
    backgroundImage:
      'url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC1kb3duIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtZG93biBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMxLjMgMTkyaDI1Ny4zYzE3LjggMCAyNi43IDIxLjUgMTQuMSAzNC4xTDE3NC4xIDM1NC44Yy03LjggNy44LTIwLjUgNy44LTI4LjMgMEwxNy4yIDIyNi4xQzQuNiAyMTMuNSAxMy41IDE5MiAzMS4zIDE5MnoiPjwvcGF0aD48L3N2Zz4=")',
    backgroundPosition: "right 16px center",
    backgroundRepeat: "no-repeat",
    backgroundSize: 8,

    sm: {
      py: 2,
      fontSize: "sm",
      h: 8,
    },

    lg: {
      py: 4,
      fontSize: "xl",
      h: 14,
    },
  },

  textarea: {
    variant: "input",
  },

  fieldset: {
    border: "1px solid",
    borderColor: "border",
    borderRadius: "md",
  },

  icons: {
    clipboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    arrow: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
    search: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
    swatch: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>`,
    users: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
    chart: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    outline: `<svg class="ionicon" viewBox="0 0 512 512"><path d="M336 448h56a56 56 0 0056-56v-56m0-160v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56m0-160v-56a56 56 0 0156-56h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
    bath: `<svg class="ionicon" viewBox="0 0 512 512"><path d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M344 328a72 72 0 01-72 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
    bed: `<svg class="ionicon" viewBox="0 0 512 512"><path d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16m0 0v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
    grid: `<svg class="ionicon" viewBox="0 0 512 512"><rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
    list: `<svg class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288M160 256h288M160 368h288"/><circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`,
  },
}

export default theme
