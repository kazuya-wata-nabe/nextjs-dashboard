const objectToClassName = (classNames: Record<string, boolean>) => {
  return Object.keys(classNames)
    .filter((key) => classNames[key])
    .join(" ")
}

const arrayToClassName = (classNames: (string | false)[]) => {
  return classNames.filter((v) => typeof v === "string").join(" ")
}

export const toClassName = (classNames: Record<string, boolean> | (string | false)[]) => {
  return Array.isArray(classNames) ? arrayToClassName(classNames) : objectToClassName(classNames)
}
