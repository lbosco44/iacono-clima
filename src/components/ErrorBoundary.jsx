import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Errore renderizzazione:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center p-6 text-center">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-dark)]">
              Qualcosa è andato storto
            </h1>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Ricarica la pagina o contattaci telefonicamente al 0931 441616.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary mt-6"
            >
              Ricarica
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
