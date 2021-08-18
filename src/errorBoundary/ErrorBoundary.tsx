import * as React from 'react';
import { ErrorBoundaryTypes } from './errorBoundary.interface';

class ErrorBoundary extends React.Component<{}, ErrorBoundaryTypes> {
  constructor(props: ErrorBoundaryTypes) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Произошла ошибка при загрузки страницы</h2>
          <p>Обновите страницу или повторите запрос позже.</p>
          <p>Приносим извинения за доставленные неудобства</p>
          <div style={{ color: '#aaa' }}>
            <p>Детали ошибки.</p>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              <p>{this.state.error && this.state.error.toString()}</p>
              <p>{this.state.errorInfo.componentStack}</p>
            </details>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
