import * as React from "react";

export interface ErrorBoundaryTypes {
    props?: React.FC
    error?: null | string
    errorInfo?: null | {componentStack: Function}
}