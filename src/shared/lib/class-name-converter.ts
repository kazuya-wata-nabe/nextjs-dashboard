export const toClassName = (classNames: Record<string, boolean>) => {
  return Object.keys(classNames)
    .filter((key) => classNames[key])
    .join(" ")
}
