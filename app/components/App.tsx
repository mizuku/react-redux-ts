import * as React from "react"
import Incrementer from "../containers/Incrementer"

export interface AppProps extends React.Props<any> {
}

export class App extends React.Component<AppProps, any> {
    constructor(
        public props: AppProps
    ) {
        super(props);
    }

    // render
    render(): JSX.Element {
        return (
            <div className="app">
                <Incrementer />
            </div>
        );
    }
}
