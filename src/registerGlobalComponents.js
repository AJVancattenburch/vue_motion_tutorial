export async function registerGlobalComponents(root) {
  const components = import.meta.glob('./components/*.vue')
  for (const fileName in components) {
    const componentName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    const component = await import(`./components/${componentName}.vue`)
    root.component(componentName, component.default)
  }
}
