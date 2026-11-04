import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

const ICONO = '📅'

const percent = atom({ plugin: 'semanal', key: 'percent' } as const, null)

const refresh = async ($: EngineInterface) => {
  const { rateLimits } = await $.session.usage()
  const week = rateLimits.find(limit => limit.kind === 'seven_day')
  await update($, percent, () => week?.percentUsed ?? null)
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const result = await next(e)
    await refresh($)
    return result
  })

  on('turn.complete', async ($, e, next) => {
    const result = await next(e)
    if (e.agentId === undefined) await refresh($)
    return result
  })

  // En el pie del cuadro de texto, delante de lo que dibujan los demás.
  on('ui.render', { component: 'SessionMode' }, async ($, e, next) => {
    const { Box, Button } = $.ui.resolve(e)
    const drawn = await next(e)
    const pct = await read($, percent)
    const shown = pct === null ? '–' : `${Math.round(pct)} %`

    return (
      <Box>
        {/* El escritorio pone los botones delante del texto: sin ser botón, saldría detrás del de compactor. */}
        {drawn}
        <Button key="semanal" plain dimColor onPress={() => {}}>{ICONO} {shown}</Button>
      </Box>
    )
  })
}
