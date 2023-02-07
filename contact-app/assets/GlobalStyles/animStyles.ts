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

export { Shake }