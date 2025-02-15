import React, { Component, ErrorInfo } from 'react';
import SearchFailed from '../ErrorMessages/SearchFailed';

interface Props {
    children: React.ReactNode
}

interface State {
    hasError: Boolean
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo);
        this.setState({ hasError: true });
    }


    render() {
        if (this.state.hasError) {
            return <SearchFailed />
        }

        return this.props.children;
    }
}

export default ErrorBoundary

//class ErrorBoundary extends Component<Props, State> {
//    constructor(props: Props) {
//      super(props);
//      this.state = { hasError: false };
//    }
//
//    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//      console.error('ErrorBoundary caught an error: ', error, errorInfo);
//      this.setState({ hasError: true });
//    }
//
//    render() {
//      if (this.state.hasError) {
//        return <h1>Something went wrong.</h1>;
//      }
//
//      return this.props.children;
//    }
//  }
