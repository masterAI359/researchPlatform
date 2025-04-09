import React, { Component, ErrorInfo } from 'react'
import ErrorMessage from '../ErrorMessages/SearchFailed'
import { error } from 'astro/dist/core/logger/core'

interface Props {
    children: React.ReactNode,
    fallback?: React.ReactNode
}

interface State {
    hasError: Boolean
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            console.log("Error occured")
        }
        return this.props.children;
    }
}

export default ErrorBoundary

