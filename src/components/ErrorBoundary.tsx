import { Component, type ReactNode, type ErrorInfo } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean; message: string; stack: string };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: "", stack: "" };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message, stack: error.stack ?? "" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState((s) => ({ ...s, stack: (info.componentStack ?? "") + "\n" + (error.stack ?? "") }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "system-ui, sans-serif",
            padding: "2rem",
            textAlign: "center",
            background: "#f8f8f6",
            color: "#0f1b2d",
          }}
        >
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4a4a", marginBottom: "1rem" }}>
            Qualcosa è andato storto
          </p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
            Errore di rendering
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#4a4a4a", marginBottom: "2rem", maxWidth: "28rem" }}>
            {this.state.message || "Si è verificato un errore inaspettato."}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#0066cc",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            Ricarica la pagina
          </button>
          {this.state.stack && (
            <pre style={{
              marginTop: "1.5rem",
              padding: "1rem",
              background: "#0f1b2d",
              color: "#f8f8f6",
              fontSize: "0.65rem",
              textAlign: "left",
              borderRadius: "4px",
              maxWidth: "90vw",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}>
              {this.state.stack}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
