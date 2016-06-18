import * as React from "react"
import * as Model from "../models"

export interface IncrementProps {
    counter?: Model.Counter;
    increment?: Function;
}

export class Increment extends React.Component<IncrementProps, any> {
    constructor(
        public props:IncrementProps
    ) {
        super(props);
    }

    handleClick = (): void => {
        this.props.increment();
    }

    // render
    render(): JSX.Element {
        return (
            <div className="increment">
                <span>{this.props.counter.count}</span>
                <button onClick={this.handleClick}>increment</button>
            </div>
        );
    }
}

