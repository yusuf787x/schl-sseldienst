import next from "eslint-config-next";

/**
 * Flache ESLint-Konfiguration. eslint-config-next 16 liefert bereits
 * Flat Config, FlatCompat wird nicht mehr gebraucht.
 */
const config = [
  ...next,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default config;
