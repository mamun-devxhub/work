import { ErrorMessage } from "~/types/toaster";

declare module "#app" {
  interface NuxtApp {
    $bdNumberFormat: (value: number) => string;
    $redirectToParentPath: () => void;
    $dateFormat: (date: string) => string;
    $toast: (name: string, value: ErrorMessage) => void;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $bdNumberFormat: (value: number) => string;
    $redirectToParentPath: () => void;
    $dateFormat: (date: string) => string;
    $toast: (name: string, value: ErrorMessage) => void;
  }
}

export {};
