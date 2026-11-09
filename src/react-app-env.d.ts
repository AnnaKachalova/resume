/// <reference types="vite/client" />
/// <reference types="@types/react" />

declare module "*.pdf" {
  const url: string;
  export default url;
}
