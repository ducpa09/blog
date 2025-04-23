import { InjectionToken } from "@angular/core";
import { BACKEND_URL } from "environment";

export const API_URL = new InjectionToken<string>(BACKEND_URL);
