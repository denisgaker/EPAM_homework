import * as React from 'react';

export interface Props {
  props?: React.FC;
  error: null | Error;
  errorInfo: React.ErrorInfo;
}
