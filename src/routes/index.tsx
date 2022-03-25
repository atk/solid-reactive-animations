import { createSignal } from 'solid-js';

import "./index.css";

type ItemProps = {
  x: number,
  y: number,
  name: string,
  value: string | number,
  active?: boolean
}


const Signal = (props: ItemProps) => {
  return <>
    <circle
      class={props.active ? 'active' : null}
      cx={props.x + 5}
      cy={ props.y + 5}
      r="4.5"
      fill="#FFF"
      stroke-width="0.2px"
      stroke="#000"
    />
    <text
      x={props.x + 2.25}
      y={props.y + 4}
      text-align="center"
      font-size="2"
    >
      signal
    </text>
    <text
      x={props.x + 5 - props.name.length * 0.5}
      y={props.y + 6.25}
      text-align="center"
      font-size="2"
    >
      {props.name}
    </text>
    <text
      x={props.x + 5 - props.value.toString().length * 0.7}
      y={props.y + 8.25}
      text-align="center"
      font-size="2"
    >
      {props.value}
    </text>
  </>
}

const Memo = (props: ItemProps) => {
  return <>
    <path
      class={props.active ? 'active' : null}
      d={`M${props.x + 5} ${props.y}l5 5l-5 5l-5 -5z`}
      fill="#FFF"
      stroke-width="0.2px"
      stroke="#000"
    />
    <text
      x={props.x + 2.2}
      y={props.y + 4}
      text-align="center"
      font-size="2"
    >
      memo
    </text>
    <text
      x={props.x + 5 - props.name.length * 0.5}
      y={props.y + 6}
      text-align="center"
      font-size="2"
    >
      {props.name}
    </text>
    <text
      x={props.x + 5 - props.value.toString().length * 0.5}
      y={props.y + 8.25}
      text-align="center"
      font-size="2"
    >
      {props.value}
    </text>
  </>
}

const Effect = (props: ItemProps) => {
  return <>
    <path
      class={props.active ? 'active' : null}
      d={`M${props.x} ${props.y}h10v10h-10z`}
      fill="#FFF"
      stroke-width="0.2px"
      stroke="#000"
    />
    <text
      x={props.x + 2.25}
      y={props.y + 4}
      text-align="center"
      font-size="2"
    >
      effect
    </text>
    <text
      x={props.x + 5 - props.name.length * 0.5}
      y={props.y + 6}
      text-align="center"
      font-size="2"
    >
      {props.name}
    </text>
    <text
      x={props.x + 5 - props.value.toString().length * 0.5}
      y={props.y + 8.25}
      text-align="center"
      font-size="2"
    >
      {props.value}
    </text>
  </>
}

const Arrow = (props: { x: number, y: number, active?: boolean }) => 
  <path
    class={props.active ? 'active' : null}
    d={`M${props.x} ${props.y-0.1}h8v-0.5l2 0.6l-2 0.6v-0.5h-8z`}
  />;

const frames: ({
  a: [number, boolean],
  ab: boolean,
  b: [number, boolean],
  bc: boolean,
  c: [number, boolean],
  duration: number
})[] = [
  { a: [0, false], ab: false, b: [0, false], bc: false, c: [0, false], duration: 2000 },
  { a: [1, true], ab: false, b: [0, false], bc: false, c: [0, false], duration: 500 },
  { a: [1, true], ab: true, b: [0, false], bc: false, c: [0, false], duration: 500 },
  { a: [1, false], ab: true, b: [2, true], bc: false, c: [0, false], duration: 500 },
  { a: [1, false], ab: false, b: [2, true], bc: true, c: [0, false], duration: 500 },
  { a: [1, false], ab: false, b: [2, false], bc: true, c: [2, true], duration: 500 },
  { a: [1, false], ab: false, b: [2, false], bc: false, c: [2, false], duration: 2000 },
  { a: [2, true], ab: false, b: [2, false], bc: false, c: [0, false], duration: 500 },
  { a: [2, true], ab: true, b: [2, false], bc: false, c: [0, false], duration: 500 },
  { a: [2, false], ab: true, b: [4, true], bc: false, c: [0, false], duration: 500 },
  { a: [2, false], ab: false, b: [4, true], bc: true, c: [0, false], duration: 500 },
  { a: [2, false], ab: false, b: [4, false], bc: true, c: [4, true], duration: 500 },
  { a: [2, false], ab: false, b: [4, false], bc: false, c: [4, false], duration: 0 }
];

export default function Home() {
  const steps = frames.slice();
  const [step, setStep] = createSignal(steps.shift());
  const timer = setInterval(() => { 
    setStep((step) => steps.shift() || (clearTimeout(timer), step));
  }, step().duration);
  return (
    <main>
      <svg viewBox="0 0 60 30" style="height: 100%; background: #F9F9F9;">
        <Signal x={2} y={2} name="a" value={step().a[0]} active={step().a[1]} />
        <Arrow x={12} y={7} active={step().ab} />
        <Memo x={22} y={2} name="b=a*2" value={step().b[0]} active={step().b[1]} />
        <Arrow x={32} y={7} active={step().bc} />
        <Effect x={42} y={2} name="b()" value={step().c[0]} active={step().c[1]} />
      </svg>
    </main>
  );
}
