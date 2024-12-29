import cyrillicToTranslit from 'cyrillic-to-translit-js'

export const translit = (str: string): String => {
  return cyrillicToTranslit().transform(str, '-')
}