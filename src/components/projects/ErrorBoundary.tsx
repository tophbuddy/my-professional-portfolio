'use client';

import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Project component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
          <FiAlertTriangle className="w-12 h-12 text-accent mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">Something went wrong</h2>
          <p className="text-text-secondary text-center max-w-md mb-6">
            {this.state.error?.message || 'An unexpected error occurred while loading the project.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.href = '/projects';
            }}
            className="px-6 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors duration-300"
          >
            Return to Projects
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
