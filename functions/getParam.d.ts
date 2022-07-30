declare function getParam(param: String): any;
getParam.string = (value: String) => String;
getParam.toValue = (value: String) => Boolean | Number | String;
export = getParam