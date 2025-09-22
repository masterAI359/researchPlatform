import React, { Component, ErrorInfo } from 'react';
import ErrMessage from './messages/ErrMessage';
import { AppError, normalizeError } from '@/helpers/errors/normalizeError';

interface Props {
    children: React.ReactNode,
    fallback?: React.ReactNode
}

interface State {
    hasError: Boolean,
    error: unknown,
    typedError: AppError | null
}



class ErrorBoundary extends Component<React.PropsWithChildren, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, error: null, typedError: null }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        const typed: AppError | null = normalizeError(error);

        console.error({ ErrorBoundary: `${error}`, Details: errorInfo });
        this.setState({ hasError: true, typedError: typed });
    };

    render() {
        if (this.state.hasError) {
            return this.props.children && (
                <ErrMessage message={this.state.typedError} onRetry={() => this.setState({ hasError: false, error: null })} />
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary

