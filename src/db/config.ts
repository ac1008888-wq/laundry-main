// Database configuration for the SQLite database architecture.

import type { DatabaseConfig, DatabaseEngine } from "./types";

function env(name: string, fallback?: string): string {
  const v = process.env[name];
  if (v === undefined || v === null || v === "") return fallback ?? "";
  return v;
}

export function getDatabaseConfig(overrides: Partial<DatabaseConfig> = {}): DatabaseConfig {
  const cfg: DatabaseConfig = {
    engine: "sqlite",
    sqlitePath: overrides.sqlitePath ?? env("SQLITE_PATH", env("DB_NAME", "laundry.db")),
  };
  return { ...cfg, ...overrides };
}

export function isSqliteConfig(cfg: DatabaseConfig): boolean {
  return cfg.engine === "sqlite";
}

export const DEFAULT_SQLITE_PATH = "laundry.db";

export default getDatabaseConfig;