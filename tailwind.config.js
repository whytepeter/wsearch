module.exports = {
  theme: {
    extend: {
      minWidth: {
        0: "0",
        16: "3rem",
        18: "4rem",
        20: "5rem",
        24: "6rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%"
      },
      maxWidth: {
        0: "0",
        16: "3rem",
        18: "4rem",
        20: "5rem",
        24: "6rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%"
      },

      colors: {
        primary: "#2CDB91",
        secondary: "#313131",
        hoverp: "#29CC87",
        hovers: "#454545",
        lite: "#D6FFE9"
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem"
      }
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled"
  ],

  plugins: []
}
