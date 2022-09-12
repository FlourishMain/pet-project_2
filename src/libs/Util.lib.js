export const toTailWind = (obj) => {
  let tailwindClass = "";

  //converting the object to tailwind
  for (const prop in obj) {
    const value = obj[prop];
    tailwindClass += /^\*.+/.test(prop)
      ? ` ${prop.replace("*", "")}-[${value}]`
      : ` ${prop}-${value}`;
  }

  return tailwindClass;
};
