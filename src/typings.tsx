type JSXElementConstructor<P> = ((props: P) => ReactElement | null) | (new (props: P) => Component<P, any>);
interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string> {
    type: T,
    props: P
}

interface DOMElement extends ReactElement {

}

interface ReactHTML {
    div: HTMLDivElement,
    span: HTMLSpanElement
}

interface DetailedReactHTMLElement extends DOMElement {
    type: keyof ReactHTML
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | boolean | null | undefined;

interface FunctionComponent<P = {}> {
    (props: P): ReactElement | null
}

interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {

}

type ComponentState = any;
declare class Component<P, S> {
    setState(state: any): void
    render(): ReactNode
}
interface ComponentClass<P = {}, S = ComponentState> {
    new(props: P): Component<P, S> // 函数前面加 ‘new’ 表示这是一个类的构造函数
}
interface ComponentElement<P> extends ReactElement<P, ComponentClass<P>> {

}

export declare function createElement<P>(
    type: ComponentClass<P>, // type 类组件
    props: P,
    ...children: ReactNode[]
): ComponentElement<P>;

export declare function createElement<P>(
    type: FunctionComponent<P>, // type 函数组件
    props: P,
    ...children: ReactNode[]
): FunctionComponentElement<P>;

// <P> 表示元素的属性类型
export declare function createElement<P>(
    type: string, // type 是一个字符串，它就是一个原生的组件 div span p ...
    props: P,
    ...children: ReactNode[]
): ReactElement;