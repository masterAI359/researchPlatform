import React, { Component, ErrorInfo } from 'react';
import ErrMessage from './messages/ErrMessage';

interface Props {
    children: React.ReactNode,
    fallback?: React.ReactNode
}

interface State {
    hasError: Boolean,
    error: unknown
}

class ErrorBoundary extends Component<React.PropsWithChildren, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            console.log("Error occurred in ErrorBoundary");
            return this.props.children && (
                <ErrMessage message='' onRetry={() => this.setState({ hasError: false, error: null })} />
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary

