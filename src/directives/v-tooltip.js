export default {
  mounted(el, binding) {
    const tooltip = document.createElement('div')
    tooltip.textContent = binding.value

    tooltip.style.position = 'absolute'
    tooltip.style.background = '#333'
    tooltip.style.color = '#ffffff'
    tooltip.style.borderRadius = '10px'
    tooltip.style.fontWeight = 'bold'
    tooltip.style.fontSize = '12px'
    tooltip.style.transition = 'opacity 0.2s ease'
    tooltip.style.padding = '6px 9px'
    tooltip.style.visibility = 'hidden'

    document.body.appendChild(tooltip)

    const show = (e) => {
      tooltip.style.left = `${e.pageX + 10}px`
      tooltip.style.top = `${e.pageY + 10}px`
      tooltip.style.visibility = 'visible'
      tooltip.style.opacity = '0.9'
    }

    const move = (e) => {
      tooltip.style.left = `${e.pageX + 10}px`
      tooltip.style.top = `${e.pageY + 10}px`
    }

    const hide = () => {
      tooltip.style.visibility = 'hidden'
      tooltip.style.opacity = '0'
    }

    el.addEventListener('mouseenter', show)
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', hide)

    el._tooltipCleanup = () => {
      el.removeEventListener('mouseenter', show)
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', hide)
      document.body.removeChild(tooltip)
    }
  },
  unmounted(el) {
    el._tooltipCleanup?.()
  },
}
