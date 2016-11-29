import * as Inferno from 'inferno/dist/inferno-compat';
//import * as Inferno from 'inferno';

var vdom = Inferno;
vdom.DOM = Inferno;
// vdom.createStaticVElement = Inferno.createStaticVElement;
// vdom.createOptBlueprint = Inferno.createOptBlueprint;
// vdom.createVComponent = Inferno.createVComponent;
// vdom.ValueTypes = Inferno.ValueTypes;
// vdom.ChildrenTypes = Inferno.ChildrenTypes;
// vdom.NodeTypes = Inferno.NodeTypes;

export const VDOM = vdom;