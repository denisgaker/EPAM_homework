import * as React from 'react';
import { Props } from './errorBoundary.interface';

class ErrorBoundary extends React.Component<{}, Props> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render(): React.ReactNode {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Ошибка при загрузке приложения</h2>
          <p>Подробнее см. ниже</p>
          <div style={{ color: '#aaa' }}>
            <h3>Детали ошибки</h3>
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
