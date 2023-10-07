// components/PageTransition.js

import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PageTransition({ children }) {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames="page"
        key={children.key}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}