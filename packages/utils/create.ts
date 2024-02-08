/**
 * BEM 规范
 * block：代码片段 => y-button
 * element：元素 => y-button__element
 * modifier：装饰 => y-button__element--disabled
 * state：状态 => is-checked
 *
 * y-button
 * y-button__element
 * y-button__element--disabled
 * is-checked
 */

// z-button-box__element--modifier
function _bem(
    prefixName: string,
    blockSuffix: string,
    element: string,
    modifier: string
  ) {
    if (blockSuffix) {
      prefixName += `-${blockSuffix}`;
    }
    if (element) {
      prefixName += `__${element}`;
    }
  
    if (modifier) {
      prefixName += `--${modifier}`;
    }
  
    return prefixName;
  }
  
  function createBEM(prefixName: string) {
    const b = (blockSuffix: string = "") => _bem(prefixName, blockSuffix, "", "");
    const e = (element: string = "") =>
      element ? _bem(prefixName, "", element, "") : "";
    const m = (modifier: string = "") =>
      modifier ? _bem(prefixName, "", "", modifier) : "";
  
    const be = (blockSuffix: string = "", element: string = "") =>
      blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  
    const bm = (blockSuffix: string = "", modifier: string = "") =>
      blockSuffix && modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  
    const em = (element: string = "", modifier: string = "") =>
      element && modifier ? _bem(prefixName, "", element, modifier) : "";
  
    const bem = (
      blockSuffix: string = "",
      element: string = "",
      modifier: string = ""
    ) =>
      element && modifier && blockSuffix
        ? _bem(prefixName, blockSuffix, element, modifier)
        : "";
  
    const is = (name: string, state: boolean) => (state ? `is-${name}` : "");
    return {
      b,
      e,
      m,
      be,
      bm,
      em,
      bem,
      is,
    };
  }
  export function createNamespace(name: string) {
    const prefixName = `xl-${name}`;
    return createBEM(prefixName);
  }
  
  // const bem = createNamespace("icon");
  // console.log(bem.b()); // y-icon
  // console.log(bem.b("box")); // y-icon-box
  // console.log(bem.e("element")); // y-icon__element
  // console.log(bem.e()); // 空
  // console.log(bem.m("modifier")); // y-icon--modifier
  // console.log(bem.bem("box", "element", "modifier")); // y-icon-box__element--modifier
  // console.log(bem.is("checked", true)); // is-checked
  // console.log(bem.is("checked", false)); // 空
  // console.log(bem.be("box", "element")); // y-icon-box__element
  // console.log(bem.bm("box", "modifier")); // y-icon-box--modifier
  // console.log(bem.em("element", "modifier")); // y-icon__element--modifier
  