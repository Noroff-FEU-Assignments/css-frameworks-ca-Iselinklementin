const theme = {
  primaryColour: "#E92569",
  secondaryColour: "#767676",
  backgroundColour: "white",
  primaryFont: "Playfair Display",
  gradientBackground: "radial-gradient(#FFFFFF 40%, #E5E5E5 100%)",
  gradientCards: "radial-gradient(#FFFFFF 60%, #f9f9f9)",
};

export default theme;

export const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "992px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
