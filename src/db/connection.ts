import type { Database, DatabaseConfig } from "./types";
import { getDatabaseConfig } from "./config";
import { createSqliteAdapter } from "./sqlite";

export function createConnection(config?: DatabaseConfig): Database {
  const cfg = config ?? getDatabaseConfig();
  return createSqliteAdapter(cfg.sqlitePath);
}

export function createDatabase(config?: DatabaseConfig): Database {
  return createConnection(config);
}

export default createDatabase;