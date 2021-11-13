function allNotranslate(target: Element) {
  if (typeof target.className !== 'string') return
  if (target.className.includes('notranslate')) return
  Array.prototype.forEach.call(target.childNodes, (node: Element) => {
    const text = node.textContent
    if (text?.length) {
      const nodeName = node.nodeName
      const isTargetTags = ['SPAN', '#text', 'CODE', 'PRE', 'FONT'].includes(nodeName)
      const isShortComment = !text.includes('\n') && (text.startsWith('//') || text.startsWith('#'))
      const isLongComment = text.startsWith('/*') && text.endsWith('*/')
      if (isTargetTags && (isShortComment || isLongComment)) return
      if (nodeName === '#text') {
        if (target.childElementCount === 0) target.classList.add('notranslate')
        else {
          const s = document.createElement('span')
          s.textContent = node.textContent
          s.classList.add('notranslate')
          node.replaceWith(s)
        }
      }
    }
    if (node.hasChildNodes()) allNotranslate(node)
  })
}

function addNotranslate(target: Element) {
  Array.prototype.forEach.call(target.children, (node: Element) => {
    const nodeName = String(node.nodeName)
    const className = String(node.className)
    const isTargetTags = ['PRE', 'CODE', 'FIGURE', 'SOURCE'].includes(node.nodeName)
    const isCommand = nodeName.search('COMMAND') >= 0
    const isCode = nodeName.search('CODE') >= 0
    if (isTargetTags || isCommand || isCode) {
      allNotranslate(node)
      return
    } else if (className) {
      const isShell = className.search('shell') >= 0
      const isCodeInClassName = className.search('code') >= 0
      const isBlock = className.search('block') < 0
      const isContainer = className.search('container') < 0
      if (isShell || (isCodeInClassName && isBlock && isContainer)) {
        allNotranslate(node)
        return
      }
    }
    if (node.hasChildNodes()) addNotranslate(node)
  })
}

const firstChild = document.firstElementChild
if (firstChild) setTimeout(addNotranslate, 1000, firstChild)
