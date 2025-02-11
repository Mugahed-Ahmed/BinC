import React from "react";
import PropTypes from "prop-types"; // ✅ Import this at the top

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}


// ✅ Add PropTypes to validate 'children' prop
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ErrorBoundary;
