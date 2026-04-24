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
export { preciosFaqs } from './precios'
export { presupuestoFaqs } from './presupuesto'
export { apartamentosTuristicosFaqs } from './apartamentos-turisticos'
export { hotelesFaqs } from './hoteles'
export { ignifugoFaqs } from './ignifugo'
export { hidrofugoFaqs } from './hidrofugo'
export { menorcaFaqs } from './menorca'
export { sobreNosotrosFaqs } from './sobre-nosotros'
export { proyectosFaqs } from './proyectos'
export { contactoFaqs as contactoPageFaqs } from './contacto'
export { escayolaFaqs } from './escayola'

/* Municipios Menorca (8) */
export { maoFaqs } from './mao'
export { ciutadellaFaqs } from './ciutadella'
export { alaiorFaqs } from './alaior'
export { esMercadalFaqs } from './es-mercadal'
export { ferreriesFaqs } from './ferreries'
export { santLluisFaqs } from './sant-lluis'
export { esMigjornGranFaqs } from './es-migjorn-gran'
export { esCastellFaqs } from './es-castell'

/* ─── Backward-compatible aggregate (used by PaginaGeografica + FaqAccordion) ─── */
import type { FAQ } from './types'
import { homeFaqs } from './home'
import { instalacionFaqs } from './instalacion'
import { falsosTechosFaqs } from './falsos-techos'
import { tabiquesFaqs } from './tabiques'
import { aislamientoAcusticoFaqs } from './aislamiento-acustico'
import { aislamientoTermicoFaqs } from './aislamiento-termico'
import { reformasFaqs } from './reformas'
import { preciosFaqs } from './precios'
import { presupuestoFaqs } from './presupuesto'
import { apartamentosTuristicosFaqs } from './apartamentos-turisticos'
import { hotelesFaqs } from './hoteles'
import { ignifugoFaqs } from './ignifugo'
import { hidrofugoFaqs } from './hidrofugo'
import { menorcaFaqs } from './menorca'
import { sobreNosotrosFaqs } from './sobre-nosotros'
import { proyectosFaqs } from './proyectos'
import { contactoFaqs as contactoPageFaqs } from './contacto'
import { escayolaFaqs } from './escayola'
import { maoFaqs } from './mao'
import { ciutadellaFaqs } from './ciutadella'
import { alaiorFaqs } from './alaior'
import { esMercadalFaqs } from './es-mercadal'
import { ferreriesFaqs } from './ferreries'
import { santLluisFaqs } from './sant-lluis'
import { esMigjornGranFaqs } from './es-migjorn-gran'
import { esCastellFaqs } from './es-castell'

export const faqs: Record<string, FAQ[]> = {
  home: homeFaqs,
  instalacion: instalacionFaqs,
  falsosTechos: falsosTechosFaqs,
  tabiques: tabiquesFaqs,
  aislamientoAcustico: aislamientoAcusticoFaqs,
  aislamientoTermico: aislamientoTermicoFaqs,
  reformas: reformasFaqs,
  precios: preciosFaqs,
  presupuesto: presupuestoFaqs,
  apartamentosTuristicos: apartamentosTuristicosFaqs,
  hoteles: hotelesFaqs,
  ignifugo: ignifugoFaqs,
  hidrofugo: hidrofugoFaqs,
  menorca: menorcaFaqs,
  sobreNosotros: sobreNosotrosFaqs,
  proyectos: proyectosFaqs,
  contacto: contactoPageFaqs,
  escayola: escayolaFaqs,
  // Municipios
  mao: maoFaqs,
  ciutadella: ciutadellaFaqs,
  alaior: alaiorFaqs,
  esMercadal: esMercadalFaqs,
  ferreries: ferreriesFaqs,
  santLluis: santLluisFaqs,
  esMigjornGran: esMigjornGranFaqs,
  esCastell: esCastellFaqs,
}
