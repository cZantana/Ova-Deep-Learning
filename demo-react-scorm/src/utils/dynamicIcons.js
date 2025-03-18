// DynamicIcons.js (o en el archivo donde definas weeksData)
const iconModules = import.meta.glob("../assets/iconsemana*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconMap = Object.keys(iconModules).reduce((acc, filePath) => {
  const match = filePath.match(/iconsemana(\d+)\.svg/);
  if (match) {
    acc[`semana${match[1]}`] = iconModules[filePath];
  }
  return acc;
}, {});

export default iconMap;
