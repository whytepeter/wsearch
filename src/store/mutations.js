export const showNav = (state) => {
  state.overlay = true
  state.sideNav = true
}

export const hideNav = (state) => {
  state.overlay = false
  state.sideNav = false
}

export const showAddForm = (state) => {
  state.overlay = true
  state.openAddForm = true
}
export const closeAddForm = (state) => {
  state.overlay = false
  setTimeout(() => {
    state.openAddForm = false
  }, 1000)
}

export const logout = (state) => {
  state.overlay = false
  state.login = false
}

export const showSignIn = (state) => {
  state.show = "app-sign-in"
}
export const showSignUp = (state) => {
  state.show = "app-sign-up"
}
export const showReset = (state) => {
  state.show = "app-reset-password"
}
