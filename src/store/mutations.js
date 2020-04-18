export const showNav = state => {
  state.overlay = true
  state.active = true
}

export const hideNav = state => {
  state.overlay = false
  state.active = false
}
