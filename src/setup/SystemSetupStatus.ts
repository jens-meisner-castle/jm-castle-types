import { TableStatus } from "../database/index";

export interface SystemSetupStatus {
  database: { name: string; tables: Record<string, TableStatus> };
  software: { name: string; tables: Record<string, TableStatus> };
}
