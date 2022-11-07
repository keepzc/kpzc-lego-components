import { App } from 'vue';
import LText from './components/LText';
import LImage from './components/LImage';
import LShape from './components/LShape';
export { textDefaultProps, textStylePropNames, TextComponentProps, imageDefaultProps, imageStylePropsNames, ImageComponentProps, shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps, AllComponentProps } from './defaultProps';
declare const install: (app: App) => void;
export { LText, LImage, LShape, install };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
