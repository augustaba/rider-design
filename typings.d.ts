declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

interface ImportMeta {
  webpackHot?: {
    accept: (...args) => void;
  };
}
