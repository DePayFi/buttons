import ReactDOM from 'react-dom'

const shadowContainerId = 'ReactDialogShadowContainer'
const shadowContainerStyleId = 'ReactDialogShadowContainerStyles'

function injectOutsideStyles(document: Document) {
  if (document.querySelector(shadowContainerStyleId)) {
    return
  }
  const style = document.createElement('style')
  style.type = 'text/css'
  style.setAttribute('id', shadowContainerStyleId)
  style.appendChild(
    document.createTextNode(
      `
    #` +
        shadowContainerId +
        ` {
      background: rgba(0,0,0,0);
      bottom: 0;
      height: 100%;
      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: -1rem;
      transition: all 0.4s ease-out;
      width: 100%;
      z-index: 99999;
    }

    #` +
        shadowContainerId +
        `.open {
      background: rgba(0,0,0,0.4);
      opacity: 1;
      top: 0;
    }
  `,
    ),
  )
  document.getElementsByTagName('head')[0].appendChild(style)
}

function injectInsideStyles(document: Document, shadow: HTMLElement, styles: string) {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(styles))
  shadow.appendChild(style)
}

function createAndAppendContainer(document: Document): HTMLElement {
  let container = document.getElementById(shadowContainerId)

  if (container) {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
  }

  container = document.createElement('div')
  container.setAttribute('id', 'ReactDialogShadowContainer')
  document.body.appendChild(container)

  return container
}

function createShadow(container: HTMLElement): HTMLElement {
  let shadow

  if (container.shadowRoot) {
    shadow = container.shadowRoot
  } else {
    shadow = container.attachShadow({ mode: 'open' })
  }

  return shadow
}

function createAndAppendInsideContainer(document: Document, shadow: HTMLElement): HTMLElement {
  const insideContainer = document.createElement('div')

  insideContainer.setAttribute('id', 'ReactDialogInsideContainer')
  shadow.appendChild(insideContainer)

  return insideContainer
}

function openContainer(container: HTMLElement) {
  setTimeout(() => {
    container.classList.add('open')
  }, 0)
}

interface ShadowContainerParameters {
  document: Document
  styles?: string
}

export default function ShadowContainer({
  document,
  styles = '',
}: ShadowContainerParameters): HTMLElement {
  const container = createAndAppendContainer(document)
  const shadow = createShadow(container)
  const insideContainer = createAndAppendInsideContainer(document, shadow)
  injectOutsideStyles(document)
  injectInsideStyles(document, shadow, styles)
  openContainer(container)

  return insideContainer
}
