
const simplifyPath = (path) => {
  const pathActions = path.split('/');
  const pathStack = [];
  pathStack.isEmpty = () => !!pathStack.length;

  const noPathChangeActions = ['', '.'];

  for (let i=0, len = pathActions.length; i < len; i++){
    const action = pathActions[i]
    if (action === '..') {
      pathStack.pop()
    } else if (!noPathChangeActions.includes(action)) {
      pathStack.push(action)
    }
  }

  return `/${pathStack.join('/')}`
}

module.exports = {simplifyPath}