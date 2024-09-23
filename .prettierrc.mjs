/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  semi: false, // No añadir punto y coma al final
  singleQuote: true, // Usar comillas simples en lugar de dobles
  trailingComma: 'none', // No añadir coma al final
  tabWidth: 2, // Usar un ancho de tabulación de 2 espacios
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript'
      }
    },
    {
      files: '*.css',
      options: {
        parser: 'css'
      }
    }
  ]
}
