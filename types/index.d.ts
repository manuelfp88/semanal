export type Percent = number | null

declare module 'claude-code' {
  interface PluginState {
    semanal: { percent: Percent }
  }
}
