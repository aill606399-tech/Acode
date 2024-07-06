
const tag = require("html-tag-js");

function createElement(type, props, _key) {
  if (!props) { props = {} }

  if (props.children !== undefined) {
    if (!Array.isArray(props.children)) {
      props.children = [props.children]
    }
  }

  const newProps = {};
  for (const prop of props) {
    if (typeof prop === "string" && prop.startsWith("attr")) {
      (newProps.attrs ??= {})[prop.slice(5)] = props[prop];
    } else {
      newProps[prop] = props[prop];
    }
  }
  
  console.log(type, props, newProps)

  if (type === Fragment) {
    return tag("div", newProps);
  } else if (typeof type === "string") {
    return tag(type, newProps);
  } else if (typeof type === "function") {
    return type(newProps);
  }

  throw new Error("Invalid type");
}

module.exports = {
  createElement
}
