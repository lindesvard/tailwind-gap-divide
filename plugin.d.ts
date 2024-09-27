import type { PluginAPI } from "tailwindcss/types/config";

declare const plugin: (api: PluginAPI) => void;

export = plugin;
