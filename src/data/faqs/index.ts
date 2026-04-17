/* ─── Re-export type ─── */
export type { FAQ } from './types'

/* ─── Re-export individual category arrays ─── */
export { homeFaqs } from './home'
export { instalacionFaqs } from './instalacion'
export { falsosTechosFaqs } from './falsos-techos'
export { tabiquesFaqs } from './tabiques'
export { aislamientoAcusticoFaqs } from './aislamiento-acustico'
export { aislamientoTermicoFaqs } from './aislamiento-termico'
export { reformasFaqs } from './reformas'
export { palmaFaqs } from './palma'
export { calviaFaqs } from './calvia'
export { preciosFaqs } from './precios'
export { presupuestoFaqs } from './presupuesto'
export { manacorFaqs } from './manacor'
export { incaFaqs } from './inca'
export { llucmajorFaqs } from './llucmajor'
export { alcudiaFaqs } from './alcudia'
export { sollerFaqs } from './soller'
export { andratxFaqs } from './andratx'
export { pollencaFaqs } from './pollenca'
export { marratxiFaqs } from './marratxi'
export { apartamentosTuristicosFaqs } from './apartamentos-turisticos'
export { hotelesFaqs } from './hoteles'
export { ignifugoFaqs } from './ignifugo'
export { hidrofugoFaqs } from './hidrofugo'
export { mallorcaFaqs } from './mallorca'
export { sobreNosotrosFaqs } from './sobre-nosotros'
export { proyectosFaqs } from './proyectos'
export { contactoFaqs as contactoPageFaqs } from './contacto'
export { escayolaFaqs } from './escayola'

/* ─── Backward-compatible aggregate (used by PaginaGeografica + FaqAccordion) ─── */
import type { FAQ } from './types'
import { homeFaqs } from './home'
import { instalacionFaqs } from './instalacion'
import { falsosTechosFaqs } from './falsos-techos'
import { tabiquesFaqs } from './tabiques'
import { aislamientoAcusticoFaqs } from './aislamiento-acustico'
import { aislamientoTermicoFaqs } from './aislamiento-termico'
import { reformasFaqs } from './reformas'
import { palmaFaqs } from './palma'
import { calviaFaqs } from './calvia'
import { preciosFaqs } from './precios'
import { presupuestoFaqs } from './presupuesto'
import { manacorFaqs } from './manacor'
import { incaFaqs } from './inca'
import { llucmajorFaqs } from './llucmajor'
import { alcudiaFaqs } from './alcudia'
import { sollerFaqs } from './soller'
import { andratxFaqs } from './andratx'
import { pollencaFaqs } from './pollenca'
import { marratxiFaqs } from './marratxi'
import { apartamentosTuristicosFaqs } from './apartamentos-turisticos'
import { hotelesFaqs } from './hoteles'
import { ignifugoFaqs } from './ignifugo'
import { hidrofugoFaqs } from './hidrofugo'
import { mallorcaFaqs } from './mallorca'
import { sobreNosotrosFaqs } from './sobre-nosotros'
import { proyectosFaqs } from './proyectos'
import { contactoFaqs as contactoPageFaqs } from './contacto'
import { escayolaFaqs } from './escayola'

export const faqs: Record<string, FAQ[]> = {
  home: homeFaqs,
  instalacion: instalacionFaqs,
  falsosTechos: falsosTechosFaqs,
  tabiques: tabiquesFaqs,
  aislamientoAcustico: aislamientoAcusticoFaqs,
  aislamientoTermico: aislamientoTermicoFaqs,
  reformas: reformasFaqs,
  palma: palmaFaqs,
  calvia: calviaFaqs,
  precios: preciosFaqs,
  presupuesto: presupuestoFaqs,
  manacor: manacorFaqs,
  inca: incaFaqs,
  llucmajor: llucmajorFaqs,
  alcudia: alcudiaFaqs,
  soller: sollerFaqs,
  andratx: andratxFaqs,
  pollenca: pollencaFaqs,
  marratxi: marratxiFaqs,
  apartamentosTuristicos: apartamentosTuristicosFaqs,
  hoteles: hotelesFaqs,
  ignifugo: ignifugoFaqs,
  hidrofugo: hidrofugoFaqs,
  mallorca: mallorcaFaqs,
  sobreNosotros: sobreNosotrosFaqs,
  proyectos: proyectosFaqs,
  contacto: contactoPageFaqs,
  escayola: escayolaFaqs,
}
