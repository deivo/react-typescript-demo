import * as React from 'react'
import * as ReactDOM from 'react-dom'

const root: HTMLElement | null = document.getElementById('root');
interface Props {
    className: 'title'
}
const props: Props = { className: 'title' };
interface State {
    count: number
}

// 3. 类组件
class Welcome extends React.Component<Props, State> {
    render(): React.DetailedReactHTMLElement<Props, HTMLDivElement> {
        return React.createElement<Props, HTMLDivElement>('div', props, "hello", null, undefined, true, 20);
    }
}
let element = React.createElement(Welcome, props)


// 2. 函数组件
// function Welcome(props: Props): React.DetailedReactHTMLElement<Props, HTMLDivElement> {
//     return React.createElement<Props, HTMLDivElement>('div', props, 'hello', null, undefined, true, 10);
// }
// let element: React.FunctionComponentElement<Props> = React.createElement(Welcome, props);

// 1. 原生dom
// const element: React.DetailedReactHTMLElement<Props, HTMLDivElement> = React.createElement<Props, HTMLDivElement>('div', props, "hello");
ReactDOM.render(element, root);