import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});

Object.defineProperty(window, "getComputedStyle", {
  writable: true,
  value: () => ({
    getPropertyValue: (prop: string) => {
      if (prop === "display") return "block";
      return "";
    },
  }),
});
