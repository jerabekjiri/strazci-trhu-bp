export const registerStyleModule = (namespace, style) => {
  const styleModule = document.createElement('dom-module');
  const templateElement = document.createElement('template');
  const styleElement = document.createElement('style');

  styleElement.innerHTML = style.cssText;
  templateElement.innerHTML = styleElement.outerHTML;
  styleModule.appendChild(templateElement);

  styleModule.register(namespace + '-style');
}