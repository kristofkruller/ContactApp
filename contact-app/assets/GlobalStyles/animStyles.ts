import styled, { keyframes } from "styled-components";

const Shake = keyframes`
			0% {
				transform : translateX(2px);
				transform : rotate(4deg);
			}

			10% {
				transform : translateX(-2px);
				transform : rotate(-4deg);
			}

			20% {
				transform : translateX(2px);
				transform : rotate(4deg);
			}

			30% {
				transform : translateX(-2px);
				transform : rotate(-4deg);
			}
			40% {
				transform : translateX(2px);
			}

			50% {
				transform : translateX(-2px);
			}
			60% {
				transform : translateX(2px);
			}

			70% {
				transform : translateX(-2px);
			}
			80% {
				transform : translateX(2px);
			}

			90% {
				transform : translateX(-2px);
			}

			0% {
				transform : translateX(2px);
			}

			100% {
				transform : translateX(-2px);
			}
`
const DecorLineBg = keyframes`
  
`

const SpinAround = keyframes`
  to { transform: rotate(360deg) }
`

const IconShakeNScale = keyframes`
  0% {
    transform: scale(1) rotate(0);
  }
  15% {
    transform: scale(1.05) rotate(20deg);
  }
  30% {
    transform: scale(1) rotate(0);
  }
  40% {
    transform: scale(1.1) rotate(-20deg);
  }
  65% {
    transform: scale(1.1) rotate(5deg);
  }
  75% {
    transform: scale(1) rotate(-3deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
`

export { Shake, IconShakeNScale, SpinAround }