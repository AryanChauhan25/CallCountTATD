export namespace Route {
  export interface MetaArgs {
    error?: Error;
    data?: unknown;
  }

  export interface LinksFunction {
    (): Array<{ rel: string; href: string }>;
  }

  export interface ErrorBoundaryProps {
    error: Error;
  }
} 