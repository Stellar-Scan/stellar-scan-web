'use client';
import { Component, type ReactNode } from 'react';

type ErrorBoundaryState = { error?: Error };

export class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = {};
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) return <p role="alert">Something went wrong.</p>;
    return this.props.children;
  }
}
